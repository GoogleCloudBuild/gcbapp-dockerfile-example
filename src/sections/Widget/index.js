import React from 'react';
import { graphql } from 'gatsby';

import DefaultWidgetSection from './default';

const WidgetSection = (props) => {
  const { theme } = props.data;

  switch (theme) {
    default: return <DefaultWidgetSection {...props} />;
  }
};

export const query = graphql`
  fragment WidgetSectionFragment on ContentfulSectionWidget {
    title
    contentful_id
    node_locale
    __typename
    internal {
      type
    }
    heading
    subHeading
    widget {
      ...on ContentfulWidgetSearchableAccordian {
        ...SearchableAccordianWidgetFragment
      }
      ...on ContentfulWidgetProductCustomiserForm {
        ...ProductCustomiserFormWidgetFragment
      }
    }
    options {
      wrapper
      heading {
        alignment
        size
      }
      offsetThis
      offsetNext
    }
    theme
  }
`;

export default WidgetSection;
