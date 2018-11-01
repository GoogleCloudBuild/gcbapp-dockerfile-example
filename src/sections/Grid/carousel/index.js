import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentSwitch from '../../../utils/ComponentSwitch';

import Item from './Item';
import Carousel from '../../../components/Carousel';
import mediaQueries from '../../../styles/mediaQueries';

import {
  Section,
  SectionContent,
  Heading,
  Description,
  CarouselWrapper,
  BufferItem,
  Space,
} from './styles';

class CarouselGridSection extends Component {
  constructor(props) {
    super(props);

    this.gridItemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemTestimonial: (item) => <Item key={item.contentful_id} data={item} />,
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

    const itemList = [...items];
    let rows = [];

    if (typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_MOBILE).matches) {
      rows = itemList.map((item) => [item]);
    } else if (typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_TABLET).matches) {
      if (itemList.length % 2 !== 0) {
        const bufferItemCount = maxRowItems - (itemList.length % maxRowItems);
        for (let i = 0; i < bufferItemCount; i += 1) {
          itemList.push({ id: i, buffer: true });
        }
      }

      const rowCount = itemList.length / 2;

      for (let i = 0; i < rowCount; i += 1) {
        rows.push(itemList.splice(0, 2));
      }
    } else {
      if (itemList.length % maxRowItems !== 0) {
        const bufferItemCount = maxRowItems - (itemList.length % maxRowItems);
        for (let i = 0; i < bufferItemCount; i += 1) {
          itemList.push({ id: i, buffer: true });
        }
      }

      const rowCount = itemList.length / maxRowItems;

      for (let i = 0; i < rowCount; i += 1) {
        rows.push(itemList.splice(0, maxRowItems));
      }
    }

    return (
      <Section>
        <SectionContent>
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description.description}</Description>}
          {rows.length && <Space />}
          {rows.length && (
            <Carousel showArrows showIndicators loop={false}>
              {rows.map((row) => (
                <CarouselWrapper key={row[0].contentful_id}>
                  {row.map((item, index) => {
                    if (item.buffer) {
                      return <BufferItem key={`buffer-${item.id}`} />;
                    }
                    return this.gridItemSwitcher.switch(item, {}, index);
                  })}
                </CarouselWrapper>
              ))}
            </Carousel>
          )}
        </SectionContent>
      </Section>
    );
  }
}

CarouselGridSection.propTypes = {
  data:PropTypes.object.isRequired,
};

export default CarouselGridSection;
