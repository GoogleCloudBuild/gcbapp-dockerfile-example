# Contentful UI Extension to load products from Shopify's Storefront API

Adds a custom UI field to Contentful that allows users to search and select Shopify products.

![figure](./Shopify-Product-Demo.gif "Contentful Shopify Product UI Extension demo")

To make the UI extension work you'll need a valid [Storefront API token](https://help.shopify.com/api/reference/access/storefrontaccesstoken) with `unauthenticated_read_product_listings` scope and the API endpoint of your Shopify store. By default the UI-extension uses instance parameters which are pre-configured for demo purposes:

See `extension.json` for the details:

```json
{
  "name": "Shopify Products",
  "id": "contentful-ui-shopify",
  "fieldTypes": ["Object"],
  "srcdoc": "./index.html",
  "parameters": {
    "instance": [
      {
        "id": "apiToken",
        "name": "Shopify Access Token",
        "type": "Symbol",
        "default": "d6c794c3b229749abd1d06b3ea0a7dcb"
      },
      {
        "id": "apiEndpoint",
        "name": "Shopify GraphQL endpoint",
        "type": "Symbol",
        "default": "https://crimson-education.myshopify.com/api/graphql"
      }
    ]
  }
}
```

![figure](./shopify-parameters.jpg "Contentful Shopify UI Extension parameters")

## Assign to a field of a content type

![figure](./shopify-object.png "Contentful Shopify Product UI Extension json object")

## Usage

Make sure you have the Contentful CLI installed:

```bash
npm install contentful-cli -g
```

You are logged in:

```bash
contentful login
```

And have a space selected:

```bash
contentful space use
```

To install the UI Extension:

```bash
contentful extension create
```

To update the UI Extension:

```bash
contentful extension update --force
```

## Source

https://github.com/contentful/extensions/tree/master/samples/shopify
