import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentSwitch from '../../../utils/ComponentSwitch';
import PressReleaseItem from '../gridItems/PressReleaseItem';
import MarqueeSlider from '../../../components/MarqueeSlider';
import {
  MarqueeSection, Heading, SubHeading, Description,
} from './styles';

class MarqueeSliderGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemPressRelease: (item) => item.image && (
          <PressReleaseItem
            data={item}
            key={item.contentful_id}
            forSlider
          />
        ),
      },
    });
  }

  render() {
    const { data, ...otherProps } = this.props;
    const { items } = data;
    const { heading, subHeading, description } = data;

    return (
      <MarqueeSection
        {...otherProps}
      >
        {heading && <Heading>{heading}</Heading>}
        {subHeading && <SubHeading>{subHeading}</SubHeading>}
        {description && <Description>{description}</Description>}
        <MarqueeSlider>
          {items.map((item, index) => this.gridItemSwitcher.switch(item, {}, index))}
        </MarqueeSlider>
      </MarqueeSection>
    );
  }
}

MarqueeSliderGridSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MarqueeSliderGridSection;
