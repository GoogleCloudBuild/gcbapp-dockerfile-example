import { graphql } from 'gatsby';

export const CustomItemFragment = graphql`
  fragment CustomItemFragment on ContentfulItemCustom {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    description {
      description
    }
    image {
      ...AssetFragment
    }
  }
`;

export const ServiceItemFragment = graphql`
  fragment ServiceItemFragment on ContentfulItemService {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    name
    heading
    subHeading
    description {
      description
    }
    page {
      ...ParentPageFragment
    }
    image {
      file {
        url
      }
    }
  }
`;

export const PressReleaseItemFragment = graphql`
  fragment PressReleaseItemFragment on ContentfulItemPressRelease {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    image {
      file {
        url
      }
    }
    link {
      title
      url
      theme
      openLinkInNewTab
      internal {
        type
      }
    }
  }
`;

export const UniversityItemFragment = graphql`
  fragment UniversityItemFragment on ContentfulItemUniversity {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    universityName
    essayPrompts {
      ...CustomItemFragment
    }
  }
`;

export const OfficeItemFragment = graphql`
  fragment OfficeItemFragment on ContentfulItemOffice {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    phoneNumber
    countryCode
  }
`;

export const InternationalTourFragment = graphql`
  fragment InternationalTourFragment on ContentfulItemInternationalTour {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    name
    country
    spotsLeft
    startDate
    tourLength
    url
    new
    image {
      ...AssetFragment
    }
    description {
      description
    }
  }
`;

export const StatisticItemFragment = graphql`
  fragment StatisticItemFragment on ContentfulItemStatistic {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;

export const SocialMediaItemFragment = graphql`
  fragment SocialMediaItemFragment on ContentfulItemSocialMedia {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;

export const CountryItemFragment = graphql`
  fragment CountryItemFragment on ContentfulItemCountry {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;

export const LanguageItemFragment = graphql`
  fragment LanguageItemFragment on ContentfulItemLanguage {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;

export const LocaleItemFragment = graphql`
  fragment LocaleItemFragment on ContentfulItemLocale {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;

export const TestimonialItemFragment = graphql`
  fragment TestimonialItemFragment on ContentfulItemTestimonial {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    testimonial {
      content {
        content {
          value
        }
      }
    }
    testimonialImage {
      ...AssetFragment
    }
    attribution {
      content {
        data {
          target {
            fields {
              file {
                en_NZ {
                  url
                }
              }
            }
          }
        }
        nodeType
        content {
          value
          nodeType
        }
      }
    }
  }
`;

export const PersonItemFragment = graphql`
  fragment PersonItemFragment on ContentfulItemPerson {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
  }
`;
