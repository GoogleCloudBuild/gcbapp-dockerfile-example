import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Form from '../../components/Form';
import { Wrapper } from './styles';

const FormSection = ({ data }) => (
  <Wrapper>
    <Form data={data.form} displayType={data.theme} submitText={data.submitButtonText} />
  </Wrapper>
);

export const query = graphql`
  fragment FormSectionFragment on ContentfulSectionForm {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    form {
      ...FormFragment
    }
    backgroundColour
    theme
    submitButtonText
    options {
      offsetThis
      offsetNext
      wrapper
    }
  }
`;

FormSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FormSection;
