require('dotenv').config();
const config = require('./src/utils/siteConfig');

let contentfulConfig;

if (process.env.PREVIEW_MODE === 'true') {
  contentfulConfig = {
    host: 'preview.contentful.com',
    spaceId: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  };
} else {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  };
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/v3-sitemap.xml',
        query: `{
          allSitePage {
            edges {
              node {
                path
                context {
                  excludeFromSitemap
                  updatedAt
                }
              }
            }
          }
        }`,
        serialize: ({ allSitePage }) => (
          allSitePage.edges
            .filter((edge) => !edge.node.context.excludeFromSitemap)
            // filtering to show only 'us' urls cause this plugin cant create the hreflang tag yet.
            // https://github.com/gatsbyjs/gatsby/issues/5888
            .filter((edge) => {
              const path = edge.node.path;
              return path && path.startsWith('/us');
            })
            .map((edge) => {
              const updatedAt = edge.node.context.updatedAt;
              return {
                url: config.siteUrl + edge.node.path,
                lastmod: updatedAt,
              };
            })
        ),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-compression-v2',
  ],
};
