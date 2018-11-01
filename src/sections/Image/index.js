import React from 'react';
import { graphql } from 'gatsby';

import DefaultImageSection from './default';

const ImageSection = (props) => {
  const { theme } = props.data;

  switch (theme) {
    default: return <DefaultImageSection {...props} />;
  }
};

export const query = graphql`
  fragment ImageSectionFragment on ContentfulSectionImage {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    subHeading
    image {
      ...AssetFragment
    }
    theme
    options {
      wrapper
      offsetThis
      offsetNext
      zIndex
    }
  }
`;

export default ImageSection;
