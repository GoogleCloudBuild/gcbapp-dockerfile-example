import React from 'react';
import { graphql } from 'gatsby';

import UnsupportedElementWarning from '../../components/UnsupportedElementWarning';

import DefaultGridSection from './default';
import HoverCardsGridSection from './hoverCards';
import SingleRowGridSection from './singleRow';
import ContrastGridSection from './contrast';
import FeaturedTwoGridSection from './featuredTwo';
import MarqueeSliderGridSection from './marqueeSlider';
import CardsGridSection from './cards';
import CarouselGridSection from './carousel';

const GridSection = (props) => {
  const { __typename, theme, contentful_id: id } = props.data;

  switch (theme) {
    case 'hoverCards': return <HoverCardsGridSection {...props} />;
    case 'hoverCardsSmall': return <HoverCardsGridSection {...props} small />;
    case 'singleRow': return <SingleRowGridSection {...props} />;
    case 'contrast': return <ContrastGridSection {...props} />;
    case 'featuredTwo': return <FeaturedTwoGridSection {...props} />;
    case 'cards': return <CardsGridSection {...props} />;
    case 'marqueeSlider': return <MarqueeSliderGridSection {...props} />;
    case 'carousel': return <CarouselGridSection {...props} />;
    case 'default': return <DefaultGridSection {...props} />;
    default: return (
      <UnsupportedElementWarning
        unsupported={__typename}
        contentTheme={theme}
        id={id}
      />
    );
  }
};

export const query = graphql`
  fragment GridSectionFragment on ContentfulSectionGrid {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    subHeading
    description {
      description
    }
    maxRowItems
    theme
    backgroundColour
    options {
      offsetThis
      offsetNext
      wrapper
      paddingTop
      paddingBottom
      paddingLeft
      paddingRight
    }
    items {
      ...on ContentfulItemService {
        ...ServiceItemFragment
      }
      ...on ContentfulItemCustom {
        ...CustomItemFragment
      }
      ...on ContentfulItemPressRelease {
        ...PressReleaseItemFragment
      }
      ...on ContentfulItemOffice {
        ...OfficeItemFragment
      }
      ...on ContentfulItemStatistic {
        ...StatisticItemFragment
      }
      ...on ContentfulItemTestimonial {
        ...TestimonialItemFragment
      }
      ...on ContentfulItemPerson {
        ...PersonItemFragment
      }
      ...on ContentfulItemSocialMedia {
        ...SocialMediaItemFragment
      }
      ...on ContentfulItemUniversity {
        ...UniversityItemFragment
      }
      ...on ContentfulItemCountry {
        ...CountryItemFragment
      }
      ...on ContentfulItemLanguage {
        ...LanguageItemFragment
      }
      ...on ContentfulItemLocale {
        ...LocaleItemFragment
      }
      ...on ContentfulItemInternationalTour {
        ...InternationalTourFragment
      }
    }
    button {
      ...on ContentfulLinkInternal {
        ...InternalLinkFragment
      }
      ...on ContentfulLinkExternal {
        ...ExternalLinkFragment
      }
    }
  }
`;

export default GridSection;
