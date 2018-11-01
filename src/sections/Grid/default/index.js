import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';
import CustomItem from './Custom';
import {
  Section,
  HeadingColumn,
  Heading,
  Description,
  Grid,
} from './styles';

class DefaultGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemCustom: (item) => <CustomItem key={item.contentful_id} data={item} />,
      },
    });
  }

  render() {
    const {
      heading,
      subHeading,
      description,
      items,
    } = this.props.data;

    return (
      <Section>
        {(heading || subHeading || description) && (
          <HeadingColumn>
            {heading && <Heading>{heading}</Heading>}
            {description && <Description>{description.description}</Description>}
          </HeadingColumn>)}
        <Grid>{items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}</Grid>
      </Section>
    );
  }
}

DefaultGridSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultGridSection;
