import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactSwipe from 'react-swipe';

import ComponentSwitch from '../../../utils/ComponentSwitch';
import Link from '../../../components/Link';
import {
  Section,
  SlideImage,
  BackgroundOverlay,
  Heading,
  SubHeading,
  ItemContainer,
  Item,
  SlideIndicatorContainer,
  Indicator,
  SlideDot,
  SlideDotContainer,
} from './styles';

class SlideshowHeadingSection extends Component {
  constructor(props) {
    super(props);

    this.slideIterator = null;

    this.state = {
      slideIndex: 0,
      deviceMode: null,
    };

    this.itemSwitcher = new ComponentSwitch({
      parent: props.data,
      cases: {
        ContentfulItemCustom: (item, { selected }, index) => (
          <Item key={item.contentful_id} selected={selected} onClick={() => this.selectItem(index)}>
            <span>{item.heading}</span>
          </Item>
        ),
      },
    });

    this.iterateSlide = this.iterateSlide.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.swipe = this.swipe.bind(this);
    this.startAutoIterate = this.startAutoIterate.bind(this);
    this.stopAutoIterate = this.stopAutoIterate.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
  }

  componentDidMount() {
    this.startAutoIterate();
    this.setState({ deviceMode: typeof window !== 'undefined' && window.innerWidth < 800 ? 'device' : 'desktop' });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateLayout);
    }
  }

  componentWillUnmount() {
    this.stopAutoIterate();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateLayout);
    }
  }

  updateLayout() {
    this.setState({ deviceMode: typeof window !== 'undefined' && window.innerWidth < 800 ? 'device' : 'desktop' });
  }

  startAutoIterate() {
    if (this.slideIterator === null) {
      this.slideIterator = setInterval(this.iterateSlide, this.props.interval);
    }
  }

  stopAutoIterate() {
    clearInterval(this.slideIterator);
    this.slideIterator = null;
  }

  // Iterates to the next slide for autoplay in device and desktop mode
  iterateSlide() {
    const { data: { items } } = this.props;
    const { slideIndex } = this.state;
    const nextSlideIndex = slideIndex + 1 < items.length ? slideIndex + 1 : 0;
    this.reactSwipe.next();
    this.setState({ slideIndex: nextSlideIndex });
  }

  // For selecting an item by clicking on it in desktop mode or clicking its dot in device mode
  selectItem(index) {
    this.stopAutoIterate();
    this.startAutoIterate();
    this.reactSwipe.slide(index, 300);
    this.setState({ slideIndex: index });
  }

  // Callback for swiping between items in device mode
  swipe(index) {
    this.setState({ slideIndex: index });
  }

  render() {
    const { data, interval, ...rest } = this.props;
    const { slideIndex, deviceMode } = this.state;
    const {
      heading,
      subHeading,
      button,
      items = [],
      backgroundImage,
    } = data;

    return (
      <Section
        width={(typeof window !== 'undefined' && window.innerWidth) || 1440}
        top={false}
        degrees={3}
        {...rest}
      >
        {/* Preload/prefetch background images */}
        {backgroundImage && <Helmet><link rel='preload' as='image' href={backgroundImage.file.url} /></Helmet>}
        {items.length && (
          <Helmet>
            {items.map((item, index) => item.image && (index === 0
              ? <link key={`image-preload-${item.contentful_id}`} rel='preload' as='image' href={item.image.file.url} />
              : <link key={`image-prefetch-${item.contentful_id}`} rel='prefetch' href={item.image.file.url} />
            ))}
          </Helmet>
        )}

        {/* Background slide images */}
        {backgroundImage && <SlideImage src={backgroundImage.file.url} />}
        {items.length && items.map((item, index) => item.image && (
          <SlideImage key={`image-${item.contentful_id}`} src={item.image.file.url} selected={index === slideIndex} />
        ))}
        <BackgroundOverlay />

        {/* Headings and call to action */}
        {heading && <Heading>{heading}</Heading>}
        {subHeading && <SubHeading>{subHeading}</SubHeading>}
        {button && <Link data={button[0]} />}

        {/* Slide show desktop selection indicator */}
        {items.length && (
          <SlideIndicatorContainer>
            {items.map((item, index) => (
              <Indicator
                key={`indicator-${item.contentful_id}`}
                selected={index === slideIndex}
                index={index}
              >
                +
              </Indicator>
            ))}
          </SlideIndicatorContainer>
        )}

        {/* Slide show items - Device */}
        {items.length && (
          <ItemContainer deviceOnly>
            <ReactSwipe
              key={`react-swipe-${deviceMode}`} // Remount ReactSwipe when deviceMode changes
              ref={(reactSwipe) => { this.reactSwipe = reactSwipe; }}
              swipeOptions={{
                callback: this.swipe,
              }}
            >
              {items.map((item, index) => this.itemSwitcher.switch(item, {
                selected: index === slideIndex,
              }, index))}
            </ReactSwipe>
            <SlideDotContainer>
              {items.map((item, i) => (
                <SlideDot
                  key={`slidedot-${item.contentful_id}`}
                  selected={i === slideIndex}
                  onClick={() => this.selectItem(i)}
                />
              ))}
            </SlideDotContainer>
          </ItemContainer>
        )}

        {/* Slide show items - Desktop */}
        {items.length && (
          <ItemContainer>
            {items.map((item, index) => this.itemSwitcher.switch(item, {
              selected: index === slideIndex,
            }, index))}
          </ItemContainer>
        )}
      </Section>
    );
  }
}

SlideshowHeadingSection.defaultProps = {
  interval: 4000,
};

SlideshowHeadingSection.propTypes = {
  data: PropTypes.object.isRequired,
  interval: PropTypes.number,
};

export default SlideshowHeadingSection;
