require('dotenv').config();

const contentful = require('contentful-management');
const path = require('path');
const { writeFileSync } = require('fs');

const spaceId = process.env.CONTENTFUL_SPACE;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT;
const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

console.info('Sourcing locales from Contentful....');

const client = contentful.createClient({
  accessToken: managementToken,
});

const utilFilePath = path.resolve(
  __dirname,
  '..',
  'src',
  'utils',
  'contentfulLocales.json'
);

(async () => {
  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);
  const locales = await environment.getLocales();

  writeFileSync(
    utilFilePath,
    JSON.stringify(locales.items.map(({ name, code }) => ({ name, code }))),
    null,
    2
  );

  console.info(`Locale file ${utilFilePath} written`);
})();
