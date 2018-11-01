import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Wrapper } from './styles';

const InverseAngledSection = ({ children, ...otherProps }) => (
  <Wrapper width={(typeof window !== 'undefined' && window.innerWidth) || 1440} {...otherProps}>
    {children}
  </Wrapper>
);

export const query = graphql`
  fragment InverseAngledSectionFragment on ContentfulSectionAngledInverse {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    backgroundColour
    degrees
    options {
      wrapper
      offsetThis
      offsetNext
    }
  }
`;

InverseAngledSection.propTypes = {
  children: PropTypes.node,
};

export default InverseAngledSection;
