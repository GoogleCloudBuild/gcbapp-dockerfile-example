# Crimson Marketing Website

This is a proof of concept built with [gatsby-starter-gcn](https://github.com/ryanwiemer/gatsby-starter-gcn).

## Features

* Contentful integration
* Pre-built contact form
* Minimal responsive design
* Styled components
* SEO Friendly Component
  * JSON-LD Schema
  * OpenGraph sharing support
  * Sitemap Generation
* Google Analytics
* Progressive Web app
* Offline Support
* [Gatsby Standard module](https://www.npmjs.com/package/eslint-config-gatsby-standard) for linting Javascript with StandardJS
* Stylelint support for Styled Components to lint the CSS in JS

## Demo

http://crimson-marketing-site-gatsby-proto-preview.s3-website-ap-southeast-2.amazonaws.com/en-NZ/


## Install

Install [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
`npm install --global gatsby-cli`

Setup environment variables (use V3-Marketing-Website):
```
CONTENTFUL_SPACE=
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_MANAGEMENT_TOKEN=
CONTENTFUL_DELIVERY_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
PREVIEW_MODE=
```

Run setup:
`npm run setup`

Start development server:
`npm run dev`

## Useful Tips

* If you make edits to your Contentful space while running `gatsby develop` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
* The template assumes you have at least **one page** in Contentful. If you do not the website will fail to build.
* The SEO component assumes you have entered at least one meta description in Contentful for a page. If you do not the website will fail to build.
* **DO NOT** store your Contentful access tokens or space ids anywhere in GitHub. Treat them like passwords.
