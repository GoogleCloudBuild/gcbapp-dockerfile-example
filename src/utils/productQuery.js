module.exports = `{
  products(first:5) {
    edges {
      node {
        id
        handle
        title
        options {
          name
          values
        }
        productType
        variants(first:10) {
          edges {
            node {
              id
              title
              displayName
              selectedOptions {
                name
                value
              }
              price
              sku
            }
          }
        }
      }
    }
  }
}`;
