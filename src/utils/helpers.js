const contentfulLocalesJson = require('./contentfulLocales.json');
const { defaultCountry } = require('./siteConfig');

const contentfulLocales = contentfulLocalesJson.map((locale) => locale.code);

const getEnabledLanguages = (list) => list.filter((locale) => contentfulLocales.includes(locale.language.languageCode));

const getLocaleId = (language, country) => `${language.toLowerCase()}-${country.toUpperCase()}`;

const addLocaleToPath = (path, slug) => (slug ? `/${slug}${path === '/' ? '' : path}` : path);

const getPathForPage = (page, path) => {
  const currentPath = path || '';
  const pagePath = `/${page.slug === '/' ? '' : page.slug}${currentPath}`;
  if (page.parentPage) {
    return getPathForPage(page.parentPage, pagePath);
  }
  return pagePath;
};

const removeWhiteSpace = (string) => string.replace(/\s/g, '');

const cleanURL = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const getOfficeForLocale = (offices, locale) => {
  const countryCode = locale.country.countryCode || defaultCountry;
  const office = offices.find((officeData) => (officeData.node.countryCode === countryCode))
    || offices.find((officeData) => officeData.node.countryCode === defaultCountry);
  return office;
};

const exitWithError = (message) => {
  console.warn('\x1b[41m%s\x1b[0m', message);
  process.exit(1);
};

const spaceToUnderscore = (string) => string.replace(/ +/g, '_');

module.exports = {
  addLocaleToPath,
  getPathForPage,
  removeWhiteSpace,
  cleanURL,
  getEnabledLanguages,
  getOfficeForLocale,
  getLocaleId,
  exitWithError,
  spaceToUnderscore,
};
