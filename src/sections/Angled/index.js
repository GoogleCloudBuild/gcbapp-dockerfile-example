import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Wrapper } from './styles';

const AngledSection = ({ children, ...otherProps }) => (
  <Wrapper width={(typeof window !== 'undefined' && window.innerWidth) || 1440} {...otherProps}>
    {children}
  </Wrapper>
);

export const query = graphql`
  fragment AngledSectionFragment on ContentfulSectionAngled {
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

AngledSection.propTypes = {
  children: PropTypes.node,
};

export default AngledSection;
