exports.queryNavigationBar = `{
  allContentfulNavigationBar(filter: { title: { eq: "Site Header" } }) {
    edges {
      node {
        node_locale
        contentful_id
        items {
          contentful_id
          node_locale
          title
          link {
            ...on ContentfulLinkExternal {
              text
              url
              contentful_id
              openLinkInNewTab
              internal {
                type
              }
            }
          }
          displayGrid
          hideDropdown
          items {
            ...on ContentfulMenuItem {
              contentful_id
              link {
                ...on ContentfulLinkExternal {
                  text
                  url
                  contentful_id
                  openLinkInNewTab
                  internal {
                    type
                  }
                }
              }
              displayGrid
              hideDropdown
              items {
                ...on ContentfulMenuItem {
                  contentful_id
                  link {
                    ...on ContentfulLinkExternal {
                      contentful_id
                      text
                      url
                      openLinkInNewTab
                      internal {
                        type
                      }
                    }
                  }
                  displayGrid
                  hideDropdown
                }
              }
            }
          }
        }
        logo {
          text
          internal {
            type
          }
          theme
          url
          openLinkInNewTab
          contentful_id
          image {
            file {
              url
            }
          }
        }
        callToActionButton {
          ...on ContentfulLinkExternal {
            text
            internal {
              type
            }
            theme
            url
            contentful_id
            openLinkInNewTab
          }
        }
        offices {
          internal {
            type
          }
          contentful_id
          node_locale
          name
          items {
            ...on ContentfulItemOffice {
              title
              contentful_id
              __typename
              internal {
                type
              }
              phoneNumber
              countryCode
              isDefault
            }
          }
        }
        localeSwitcher {
          node_locale
          contentful_id
          heading
          list {
            contentful_id
            localeId
            slug
            language {
              contentful_id
              languageName
              languageCode
              languageLocalName
            }
            country {
              contentful_id
              countryName
              countryCode
              flag {
                file {
                  url
                }
              }
            }
            localeCode
          }
        }
      }
    }
  }
}`;

exports.querySiteFooter = `{
  allContentfulSiteFooter(filter: { title: { eq: "Site Footer" } }) {
    edges {
      node {
        node_locale
        contentful_id
        title
        items {
          ... on ContentfulFooterSitemap {
            contentful_id
            title
            leftColumn {
              link {
                text
                url
                internal {
                  type
                }
              }
              displayGrid
              items {
                ... on ContentfulMenuItem {
                  contentful_id
                  link {
                    ... on ContentfulLinkExternal {
                      contentful_id
                      text
                      url
                      theme
                      internal {
                        type
                      }
                    }
                  }
                  displayGrid
                  hideDropdown
                  items {
                    ... on ContentfulMenuItem {
                      contentful_id
                      link {
                        ... on ContentfulLinkExternal {
                          contentful_id
                          text
                          url
                          theme
                          image {
                            title
                            file {
                              url
                            }
                          }
                          internal {
                            type
                          }
                        }
                      }
                      displayGrid
                      hideDropdown
                    }
                  }
                }
              }
            }
            centerColumn {
              contentful_id
              link {
                contentful_id
                text
                url
                theme
                internal {
                  type
                }
              }
              displayGrid
              items {
                items {
                  ... on ContentfulMenuItem {
                    contentful_id
                    link {
                      ... on ContentfulLinkExternal {
                        contentful_id
                        text
                        url
                        theme
                        image {
                          title
                          file {
                            url
                          }
                        }
                        internal {
                          type
                        }
                      }
                    }
                    displayGrid
                    hideDropdown
                  }
                }
              }
            }
            rightColumn {
              link {
                contentful_id
                text
                url
                theme
                internal {
                  type
                }
              }
              displayGrid
              items {
                items {
                  ... on ContentfulMenuItem {
                    contentful_id
                    link {
                      ... on ContentfulLinkExternal {
                        contentful_id
                        text
                        url
                        theme
                        image {
                          title
                          file {
                            url
                          }
                        }
                        internal {
                          type
                        }
                      }
                    }
                    displayGrid
                    hideDropdown
                  }
                }
              }
            }
          }
          ... on ContentfulSmallPrint {
            title
            items {
              contentful_id
              text
              url
              theme
              internal {
                type
              }
            }
          }
        }
      }
    }
  }
}
`;

exports.queryPage = `{
  allContentfulPage {
    edges {
      node {
        updatedAt
        excludeFromSitemap
        slug
        countryCode
        node_locale
        theme
        parentPage {
          slug
          parentPage {
            slug
            parentPage {
              slug
              parentPage {
                slug
              }
            }
          }
        }
      }
    }
  }
}`;
