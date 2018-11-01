import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentSwitch from '../../../utils/ComponentSwitch';

import SearchableAccordianWidget from '../../../components/widgets/SearchableAccordianWidget';
import ProductCustomiserFormWidget from '../../../components/widgets/ProductCustomiserFormWidget';
import { Section, Heading, SubHeading } from './styles';


class DefaultWidgetSection extends Component {
  constructor(props) {
    super(props);

    this.widgetSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulWidgetSearchableAccordian: (widget) => <SearchableAccordianWidget data={widget} />,
        ContentfulWidgetProductCustomiserForm: (widget) => <ProductCustomiserFormWidget data={widget} />,
      },
    });
  }

  render() {
    const { data } = this.props;
    const {
      heading,
      subHeading,
      widget,
      options,
    } = data;

    return (
      <Section>
        {heading && <Heading options={options && options.heading}>{heading}</Heading>}
        {subHeading && <SubHeading>{subHeading}</SubHeading>}
        {widget && this.widgetSwitcher.switch(widget[0])}
      </Section>
    );
  }
}

DefaultWidgetSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultWidgetSection;
