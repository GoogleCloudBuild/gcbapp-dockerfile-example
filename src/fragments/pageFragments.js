import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    slug
    countryCode
    pageTitle
    theme
    content {
      ...on ContentfulSectionAngled {
        ...AngledSectionFragment
      }
      ...on ContentfulSectionAngledInverse {
        ...InverseAngledSectionFragment
      }
      ...on ContentfulSectionHeading {
        ...HeadingSectionFragment
      }
      ...on ContentfulSectionForm {
        ...FormSectionFragment
      }
      ...on ContentfulSectionGrid {
        ...GridSectionFragment
      }
      ...on ContentfulSectionImage {
        ...ImageSectionFragment
      }
      ...on ContentfulSectionText {
        ...TextSectionFragment
      }
      ...on ContentfulSectionWidget {
        ...WidgetSectionFragment
      }
    }
    metaDescription {
      internal {
        content
      }
    }
    parentPage {
      ...ParentPageFragment
    }
  }
`;

export const ParentPageFragment = graphql`
  fragment ParentPageFragment on ContentfulPage {
    slug
    parentPage {
      slug
      parentPage {
        slug
        parentPage {
          slug
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
  }
`;

export const LocaleSwitcherFragment = graphql`
  fragment LocaleSwitcherFragment on ContentfulLocaleSwitcher {
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
`;

export const NavigationBarFragment = graphql`
  fragment NavigationBarFragment on ContentfulNavigationBar {
    contentful_id
    items {
      contentful_id
      title
      link {
        ...on ContentfulLinkExternal {
          ...ExternalLinkFragment
        }
      }
      displayGrid
      hideDropdown
      items {
        ...on ContentfulMenuItem {
          contentful_id
          link {
            ...on ContentfulLinkExternal {
              ...ExternalLinkFragment
            }
          }
          displayGrid
          hideDropdown
          items {
            ...on ContentfulMenuItem {
              contentful_id
              link {
                ...on ContentfulLinkExternal {
                  ...ExternalLinkFragment
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
      ...ExternalLinkFragment
    }
    callToActionButton {
      ...on ContentfulLinkExternal {
        ...ExternalLinkFragment
      }
    }
    localeSwitcher {
      ...LocaleSwitcherFragment
    }
  }
`;

export const SiteFooterFragment = graphql`
  fragment SiteFooterFragment on ContentfulSiteFooter {
    contentful_id
    title
    items {
      ... on ContentfulFooterSitemap {
        contentful_id
        title
        leftColumn {
          link {
            ...ExternalLinkFragment
          }
          displayGrid
          items {
            ... on ContentfulMenuItem {
              contentful_id
              link {
                ... on ContentfulLinkExternal {
                  ...ExternalLinkFragment
                }
              }
              displayGrid
              hideDropdown
              items {
                ... on ContentfulMenuItem {
                  contentful_id
                  link {
                    ... on ContentfulLinkExternal {
                      ...ExternalLinkFragment
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
            ...ExternalLinkFragment
          }
          displayGrid
          items {
            items {
              ... on ContentfulMenuItem {
                contentful_id
                link {
                  ... on ContentfulLinkExternal {
                    ...ExternalLinkFragment
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
            ...ExternalLinkFragment
          }
          displayGrid
          items {
            items {
              ... on ContentfulMenuItem {
                contentful_id
                link {
                  ... on ContentfulLinkExternal {
                    ...ExternalLinkFragment
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
          ...ExternalLinkFragment
        }
      }
    }
  }
`;
