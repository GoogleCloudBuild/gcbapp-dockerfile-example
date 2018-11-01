import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentSwitch from '../../../utils/ComponentSwitch';
import Item from './Item';
import PressReleaseItem from '../gridItems/PressReleaseItem';
import {
  Section,
  SectionContent,
  Heading,
  Grid,
} from './styles';

class SingleRowGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemPressRelease: (item) => item.image && <PressReleaseItem key={item.contentful_id} data={item} />,
        ContentfulItemService: (item) => <Item key={item.contentful_id} data={item} />,
        ContentfulItemCustom: (item) => <Item key={item.contentful_id} data={item} />,
      },
    });
  }

  render() {
    const { data, ...otherProps } = this.props;
    const { heading, items } = data;

    return (
      <Section {...otherProps}>
        <SectionContent>
          {heading && <Heading>{heading}</Heading>}
          <Grid>{items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}</Grid>
        </SectionContent>
      </Section>
    );
  }
}

SingleRowGridSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SingleRowGridSection;
