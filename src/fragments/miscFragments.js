import { graphql } from 'gatsby';

export const AssetFragment = graphql`
  fragment AssetFragment on ContentfulAsset {
    title
    node_locale
    __typename
    internal {
      type
    }
    description
    file {
      url
    }
  }
`;

export const ValidationFragment = graphql`
  fragment ValidationFragment on ContentfulValidation {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    required
    emptyErrorMessage
    type
    invalidErrorMessage
  }
`;

export const FormConditionFragment = graphql`
  fragment FormConditionFragment on ContentfulFormCondition {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    triggerField {
      ...on ContentfulFormFieldText {
        name
      }
      ...on ContentfulFormFieldGroup {
        name
      }
      ...on ContentfulOption {
        value
      }
      ...on ContentfulFormFieldUpload {
        name
      }
    }
    fieldValues
  }
`;
