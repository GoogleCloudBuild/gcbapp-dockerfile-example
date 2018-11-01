import React from 'react';
import { graphql } from 'gatsby';

import UnsupportedElementWarning from '../../components/UnsupportedElementWarning';

import DefaultHeadingSection from './default';
import ParallaxHeadingSection from './parallax';
import SlideshowHeadingSection from './slideshow';

const HeadingSection = (props) => {
  const { __typename, theme, contentful_id: id } = props.data;

  switch (theme) {
    case 'slideshow': return <SlideshowHeadingSection {...props} />;
    case 'parallax': return <ParallaxHeadingSection {...props} />;
    case 'default': return <DefaultHeadingSection {...props} />;
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
  fragment HeadingSectionFragment on ContentfulSectionHeading {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    theme
    heading
    subHeading
    button {
      ...on ContentfulLinkExternal {
        ...ExternalLinkFragment
      }
      ...on ContentfulLinkInternal {
        ...InternalLinkFragment
      }
      ...on ContentfulLinkVideoModal {
        ...VideoModalLinkFragment
      }
    }
    items {
      ...on ContentfulItemCustom {
        ...CustomItemFragment
      }
    }
    options {
      offsetThis
      offsetNext
      wrapper
      paddingBottom
    }
    backgroundImage {
      ...AssetFragment
    }
  }
`;

export default HeadingSection;
