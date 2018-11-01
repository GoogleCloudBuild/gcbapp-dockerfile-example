import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';

import Item from './Item';

import {
  Section,
  SectionContent,
  Heading,
  Description,
  Grid,
} from './styles';

class CardsGridSection extends Component {
  constructor(props) {
    super(props);
    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemInternationalTour: (item) => <Item key={item.contentful_id} data={item} />,
      },
    });
  }

  render() {
    const { data } = this.props;
    const {
      heading,
      description,
      items = [],
      maxRowItems,
    } = data;

    return (
      <Section>
        <SectionContent>
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description.description}</Description>}
          {items.length && (
            <Grid maxRowItems={maxRowItems}>
              {items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}
            </Grid>
          )}
        </SectionContent>
      </Section>
    );
  }
}

CardsGridSection.propTypes = {
  data:PropTypes.object.isRequired,
};

export default CardsGridSection;
