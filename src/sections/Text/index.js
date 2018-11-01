import React from 'react';
import { graphql } from 'gatsby';
import UnsupportedElementWarning from '../../components/UnsupportedElementWarning';

import DefaultTextSection from './default';
import IllustratedRightTextSection from './illustratedRight';

const TextSection = (props) => {
  const { theme, __typename, contentful_id: id } = props.data;

  switch (theme) {
    case 'illustratedRight': return <IllustratedRightTextSection {...props} />;
    case 'default': return <DefaultTextSection {...props} />;
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
  fragment TextSectionFragment on ContentfulSectionText {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    subHeading
    text {
      text
    }
    image {
      ...AssetFragment
    }
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
    options {
      wrapper
    }
    theme
    backgroundColour
  }
`;

export default TextSection;
