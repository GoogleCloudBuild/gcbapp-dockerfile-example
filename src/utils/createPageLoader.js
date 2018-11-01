require('dotenv').config();
const path = require('path');

const {
  addLocaleToPath,
  getPathForPage,
  getEnabledLanguages,
  getLocaleId,
  exitWithError,
} = require('./helpers');
const {
  queryPage,
  queryNavigationBar,
  querySiteFooter,
} = require('./graphqlQueries');
const { defaultLocale, defaultCountry, defaultLanguage } = require('./siteConfig');

const checkForErrors = (failCondition, message) => {
  if (failCondition) {
    exitWithError(message);
  }
};

module.exports = (graphql, createPage, isPreview) => new Promise((resolve) => {
  // Use the passed in page theme to construct a query for all pages of that type

  Promise.all([
    graphql(queryPage),
    graphql(queryNavigationBar),
    graphql(querySiteFooter),
  ]).then(([
    pageResult,
    navigationBarResult,
    siteFooterResult,
  ]) => {
    // Get navbar, locale switcher, locale list, offices and footer
    const navigationBars = navigationBarResult
      && navigationBarResult.data
      && navigationBarResult.data.allContentfulNavigationBar
      && navigationBarResult.data.allContentfulNavigationBar.edges;
    checkForErrors(!navigationBars.length, 'No navigation bar provided!');

    const defaultNavigationBar = navigationBars.length && navigationBars.find(
      ({ node }) => node.node_locale === defaultLanguage
    );
    const localeSwitcher = defaultNavigationBar && defaultNavigationBar.node.localeSwitcher;
    checkForErrors(!localeSwitcher, 'No locale switcher provided!');

    const localeList = localeSwitcher.list;
    checkForErrors(!localeList || !localeList.length, 'No locale list provided!');

    const footers = siteFooterResult
      && siteFooterResult.data
      && siteFooterResult.data.allContentfulSiteFooter
      && siteFooterResult.data.allContentfulSiteFooter.edges;
    checkForErrors(!footers.length, 'No footer provided!');

    // Filter locale list by enabled languages on contentful
    const enabledLocales = process.env.DEFAULT_LOCALE_ONLY === 'true'
      ? localeList.filter((locale) => locale.country.countryCode === defaultCountry
        && locale.language.languageCode === defaultLanguage)
      : getEnabledLanguages(localeList);

    checkForErrors(!enabledLocales.length, 'No enabled locales!');

    // Filter out pages that have a country-language combination that's not on the locale list
    let enabledPages = pageResult.data.allContentfulPage.edges
      .filter(({ node }) => {
        const enabledLocaleIds = enabledLocales.map((enabledLocale) => enabledLocale.localeId);
        const pageLocaleId = `${node.node_locale.toLowerCase()}-${node.countryCode.toUpperCase()}`;
        return enabledLocaleIds.includes(pageLocaleId);
      });

    if (process.env.TARGET_SLUG) {
      enabledPages = enabledPages.filter(({ node }) => node.slug === process.env.TARGET_SLUG);
    }

    checkForErrors(!enabledPages.length, 'No enabled pages!');

    // Get all unique instances of countries, languages and page slugs
    const uniqueSlugs = enabledPages.reduce((arr, curr) => {
      if (!arr.includes(curr.node.slug)) {
        arr.push(curr.node.slug);
      }
      return arr;
    }, []);

    // Create a list of all possible combinations
    const allRequiredPages = [];

    enabledLocales.forEach((locale) => {
      uniqueSlugs.forEach((slug) => {
        allRequiredPages.push({
          slug,
          locale: `${locale.language.languageCode.toLowerCase()}-${locale.country.countryCode.toUpperCase()}`,
        });
      });
    });

    const devPages = pageResult.data.allContentfulPage.edges
      .filter(({ node }) => node.countryCode.toUpperCase().includes('DEV') && node.node_locale === defaultLanguage);

    if (process.env.NODE_ENV === 'development') {
      devPages.forEach(({ node }) => allRequiredPages.push({
        dev: true,
        slug: node.slug,
        locale: node.countryCode,
      }));
    }

    checkForErrors(!allRequiredPages.length, 'No pages will be built!');

    // Iterate though the list of locale-page combinations and find the matching page or create a
    // duplicate from an existing version if it doesn't exist
    allRequiredPages.forEach((combo) => {
      let pageData;

      // Create dev pages
      if (combo.dev) {
        pageData = devPages.find(({ node }) => (node.slug === combo.slug
          && combo.locale === node.countryCode));
      }
      // Get page with exact combination of locale and slug
      if (!pageData) {
        pageData = enabledPages.find(({ node }) => (node.slug === combo.slug
          && getLocaleId(node.node_locale, node.countryCode) === combo.locale
        ));
      }

      // If there's no such page then get page with exact combination of slug and default Locale
      if (!pageData) {
        pageData = enabledPages.find(({ node }) => (node.slug === combo.slug
          && getLocaleId(node.node_locale, node.countryCode) === defaultLocale
        ));
      }

      // If there's still no page, get page with exact combination of slug and language and any country
      if (!pageData) {
        pageData = Object.assign({}, enabledPages.find(({ node }) => (
          node.slug === combo.slug
          && node.node_locale.toLowerCase() === combo.locale.replace(/(-[A-Z]{2})/, '')
        )));
      }

      if (pageData) {
        const { node } = pageData;

        // Find the enabled locale that matches the combination we're creating
        const displayLocale = process.env.NODE_ENV === 'development' && combo.locale.toUpperCase().includes('DEV')
          ? {
            slug: combo.locale,
            localeId: `en-nz-${combo.locale}`,
            localeCode: `en-${combo.locale}`,
            country: {
              countryName: combo.locale,
              countryCode: combo.locale,
            },
            language: {
              languageName: 'English (NZ)',
              languageLocalName: 'English',
              languageCode: 'en-NZ',
            },
          }
          : enabledLocales.find((enabledLocale) => enabledLocale.localeId === combo.locale);

        const navigationBar = navigationBars.length && navigationBars.find(
          ({ node: navBarNode }) => navBarNode.node_locale === displayLocale.language.languageCode
        ).node;

        const footer = footers.length && footers.find(
          ({ node: footerNode }) => footerNode.node_locale === displayLocale.language.languageCode
        ).node;

        const offices = navigationBar && navigationBar.offices && navigationBar.offices.items;

        // Find the office that matches the country of the page
        let office = offices
          .find((o) => o.countryCode
            && (o.countryCode.toUpperCase() === displayLocale.country.countryCode.toUpperCase())
            && o.isDefault);

        // Fallback to the country code in the page data (default locale)
        if (!office) {
          office = offices
            .find((o) => o.countryCode
              && (o.countryCode.toUpperCase() === node.countryCode.toUpperCase())
              && o.isDefault);
        }

        if (displayLocale) {
          try {
            // create page with pathname from display locale and data from associated page data
            // including all the locales, the current locale, the office, the navbar and the footer
            const pathname = addLocaleToPath(getPathForPage(node), displayLocale.slug);
            console.info('\tCreating page:', pathname);
            createPage({
              path: pathname,
              component: path.resolve(`./src/templates/page${node.theme}.js`),
              context: {
                slug: node.slug,
                contentfulLocale: node.node_locale,
                countryCode: node.countryCode,
                locales: enabledLocales,
                currentLocale: displayLocale,
                office,
                navigationBar,
                footer,
                isPreview,
                excludeFromSitemap: node.excludeFromSitemap,
                updatedAt: node.updatedAt,
              },
            });
          } catch (error) {
            console.error('ERROR!', error);
          }
        }
      }
    });

    console.info('\tPage count:', allRequiredPages.length);
    console.info('\tNode environment:', process.env.NODE_ENV);
    console.info('\tPreview mode:', isPreview);
  });

  resolve();
});
