import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Marquee, ScrollingItem,
} from './styles';

const TRANSITION_TIME = 1; // seconds

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class MarqueeSlider extends Component {
  constructor(props) {
    super(props);

    this.intervalId = null;

    const tempChildren = [];
    do { // Make enough items so it's all the way across the screen.
      React.Children.forEach(props.children, (child) => {
        tempChildren.push(child);
      });
    } while (tempChildren.length < 40 && React.Children.count(props.children) > 0);

    this.state = {
      items: tempChildren.map((child, index) => ({
        child: React.cloneElement(
          child,
          {
            id: `${child.props.id}-${index}`,
          }
        ),
        key: `${child.props.id}-${index}`,
      })),
      mode: 'change',
      slideDistance: 0,
      idPrefix: null,
      isSliderPaused: false,
    };
  }

  componentDidMount() {
    this.setState({ idPrefix: `${Math.floor(Math.random() * 10000000)}` });
    this.intervalId = setInterval(this.slideItems, (TRANSITION_TIME * 1000) + 50);
  }

  slideItems = async () => {
    const { items, isSliderPaused, idPrefix } = this.state;
    const firstItem = document && document.getElementById(`${idPrefix}-0`);
    if (firstItem && !isSliderPaused) {
      this.setState({
        slideDistance: firstItem.offsetWidth,
        mode: 'slide',
      });
      await sleep(TRANSITION_TIME * 1000);
      this.setState({
        mode: 'change',
        items: [...items.slice(1), items[0]],
      });
    }
  }

  render() {
    const {
      items, mode, slideDistance, idPrefix,
    } = this.state;

    return (
      <Marquee>
        {items.map((item, index) => (
          <ScrollingItem
            id={`${idPrefix}-${index}`}
            mode={mode}
            slideDistance={slideDistance}
            slideDuration={TRANSITION_TIME}
            key={item.key}
            onMouseOver={() => this.setState({ isSliderPaused: true })}
            onFocus={() => this.setState({ isSliderPaused: true })}
            onMouseOut={() => this.setState({ isSliderPaused: false })}
            onBlur={() => this.setState({ isSliderPaused: false })}
          >
            {item.child}
          </ScrollingItem>
        ))}
      </Marquee>
    );
  }
}

MarqueeSlider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default MarqueeSlider;
