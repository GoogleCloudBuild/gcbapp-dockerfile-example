import { graphql } from 'gatsby';

// All fragments must contain:
// contentful_id
// node_locale
// internal { type }
// __typename

export const FormFragment = graphql`
  fragment FormFragment on ContentfulForm {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    formSteps {
      ...FormStepFragment
    }
    type
  }
`;

export const FormStepFragment = graphql`
  fragment FormStepFragment on ContentfulFormStep {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    collapsedText
    clickToExpandText
    expandedText {
      expandedText
    }
    description
    formFields {
      ...on ContentfulFormFieldGroup {
        ...FormFieldGroupFragment
      }
      ...on ContentfulFormFieldText {
        ...FormFieldTextFragment
      }
      ...on ContentfulFormFieldUpload {
        ...FormFieldUploadFragment
      }
    }
  }
`;

export const FormFieldGroupFragment = graphql`
  fragment FormFieldGroupFragment on ContentfulFormFieldGroup {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    fieldType
    name
    label
    options {
      ...OptionFragment
    }
    validation {
      ...ValidationFragment
    }
    displayConditions {
      ...FormConditionFragment
    }
  }
`;

export const OptionFragment = graphql`
  fragment OptionFragment on ContentfulOption {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    label
    value
    image {
      ...AssetFragment
    }
    default
  }
`;

export const FormFieldTextFragment = graphql`
  fragment FormFieldTextFragment on ContentfulFormFieldText {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    label
    name
    fieldType
    placeholder
    validation {
      ...ValidationFragment
    }
    displayConditions {
      ...FormConditionFragment
    }
  }
`;

export const FormFieldUploadFragment = graphql`
  fragment FormFieldUploadFragment on ContentfulFormFieldUpload {
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    name
    label
    multiple
    validation {
      ...ValidationFragment
    }
    displayConditions {
      ...FormConditionFragment
    }
  }
`;
