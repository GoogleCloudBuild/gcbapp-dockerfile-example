import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';

import ServiceItem from './Service';
import SmallServiceItem from './ServiceSmall';
import {
  Section,
  Heading,
  Description,
  Grid,
} from './styles';

class HoverCardsGridSection extends Component {
  constructor(props) {
    super(props);
    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      caseProperty: 'caseType',
      cases: {
        ContentfulItemService: (item) => <ServiceItem key={item.contentful_id} data={item} />,
        ContentfulItemServiceSmall: (item) => <SmallServiceItem key={item.contentful_id} data={item} />,
      },
    });
  }

  render() {
    const { data, small } = this.props;
    const { heading, description, items } = data;

    const typeSuffix = small ? 'Small' : '';

    return (
      <Section small={small}>
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description.description}</Description>}
        <Grid>
          {items.map((item, index) => {
            item.caseType = `${(item.internal && item.internal.type) || item.__typename}${typeSuffix}`;
            return this.gridItemSwitcher.switch(item, {}, index);
          })}
        </Grid>
      </Section>
    );
  }
}

HoverCardsGridSection.propTypes = {
  data:PropTypes.object.isRequired,
  small: PropTypes.bool,
};

export default HoverCardsGridSection;
