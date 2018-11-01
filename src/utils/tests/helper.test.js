const helpers = require('../helpers');

describe('utils/helpers', () => {
  describe('#addLocaleToPath()', () => {
    it('should add the locale slug before the path if a locale is given', () => {
      const localeSlug = 'nz';
      const path = '/contact-us';
      const underTest = helpers.addLocaleToPath(path, localeSlug);

      expect(underTest).to.equal('/nz/contact-us');
    });

    it('should return the path unchanged if no locale is given', () => {
      const path = '/contact-us';
      const underTest = helpers.addLocaleToPath(path);

      expect(underTest).to.equal(path);
    });

    it('should return the locale as a path if the path is /', () => {
      const path = '/';
      const localeSlug = 'nz';
      const underTest = helpers.addLocaleToPath(path, localeSlug);

      expect(underTest).to.equal('/nz');
    });
  });

  describe('#getPathForPage()', () => {
    it('should return the page\'s slug as a path for a parentless page', () => {
      const page = {
        slug: 'slug',
      };
      const underTest = helpers.getPathForPage(page);

      expect(underTest).to.equal('/slug');
    });

    it('should return the correct hierarchical path for a page with a parent', () => {
      const page = {
        slug: 'slug',
        parentPage: {
          slug: 'parent',
        },
      };
      const underTest = helpers.getPathForPage(page);

      expect(underTest).to.equal('/parent/slug');
    });

    it('should prepend the page slug to the path given', () => {
      const path = '/slug';
      const page = {
        slug: 'parent',
      };
      const underTest = helpers.getPathForPage(page, path);

      expect(underTest).to.equal('/parent/slug');
    });

    it('should be able to handle at least 5 levels of page hierarchy', () => {
      const page = {
        slug: 'slug',
        parentPage: {
          slug: 'parent',
          parentPage: {
            slug: 'parent2',
            parentPage: {
              slug: 'parent3',
              parentPage: {
                slug: 'parent4',
              },
            },
          },
        },
      };
      const underTest = helpers.getPathForPage(page);

      expect(underTest).to.equal('/parent4/parent3/parent2/parent/slug');
    });

    it('should not double up on / if a slug is a /', () => {
      const page = {
        slug: '/',
      };
      const underTest = helpers.getPathForPage(page);

      expect(underTest).to.equal('/');
    });
  });

  describe('#getEnabledLanguages()', () => {
    it('should return only locales that have languages present on Contentful');
  });

  describe('#getLocaleId()', () => {
    it('should take a language code and a country code and create the correct id', () => {
      const underTest = helpers.getLocaleId('en-NZ', 'nz');

      expect(underTest).to.equal('en-nz-NZ');
    });
  });

  describe('#removeWhiteSpace()', () => {
    it('should remove all white space from a string containing white space and return the new string');

    it('should return the same string as the input if it contains no white space');
  });

  describe('#cleanURL()', () => {
    it('should remove all query strings from the url');

    it('should remove all hash params from the url');

    it('should not change the url if it contained no query strings or hash params');
  });

  describe('Get office for locale', () => {
    const defaultOffice = { node: { countryCode: 'nz' } };
    const japanOffice = { node: { countryCode: 'jp' } };
    const australiaOffice = { node: { countryCode: 'au' } };
    const offices = [defaultOffice, japanOffice, australiaOffice];
    const japanLocale = { country: { countryCode: 'jp' } };
    const australiaLocale = { country: { countryCode: 'au' } };
    const englandLocale = { country: { countryCode: 'uk' } };

    it('Return japan office when jp is the country code', () => {
      const office = helpers.getOfficeForLocale(offices, japanLocale);
      expect(office).to.equal(japanOffice);
    });

    it('Return australia office when au is the country code', () => {
      const office = helpers.getOfficeForLocale(offices, australiaLocale);
      expect(office).to.equal(australiaOffice);
    });

    it('Return NZ office when locale doesnt have office', () => {
      const office = helpers.getOfficeForLocale(offices, englandLocale);
      expect(office).to.equal(defaultOffice);
    });
  });
});
