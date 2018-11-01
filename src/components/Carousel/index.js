import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';

import mediaQueries from '../../styles/mediaQueries';
import {
  Wrapper,
  Content,
  Indicators,
  IndicatorDot,
  LeftArrow,
  RightArrow,
} from './styles';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.mediaQuery = typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_TABLET);

    this.state = {
      isDevice: this.mediaQuery.matches,
      index: 0,
    };

    this.responsiveUpdate = this.responsiveUpdate.bind(this);
    this.onClickArrow = this.onClickArrow.bind(this);
    this.onSlideChange = this.onSlideChange.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    this.mediaQuery.addListener(this.responsiveUpdate);
  }

  componentWillUnmount() {
    this.mediaQuery.removeListener(this.responsiveUpdate);
  }

  onClickArrow(direction) {
    if (direction === 'left') {
      this.reactSwipe.prev();
    } else if (direction === 'right') {
      this.reactSwipe.next();
    }
  }

  onSlideChange(i) {
    if (this.props.onSlideChange) {
      this.props.onSlideChange(i);
    }
    this.setState({ index: i });
  }

  changeSlide(i) {
    this.reactSwipe.slide(i, 300);
  }

  responsiveUpdate(e) {
    this.setState({ isDevice: e.matches });
  }

  shouldShowArrow(direction) {
    const { showArrows, loop, children } = this.props;
    const { isDevice, index } = this.state;

    if (!showArrows || isDevice) {
      return false;
    }

    if (!loop) {
      if (index === 0 && direction === 'left') {
        return false;
      }

      if (index === children.length - 1 && direction === 'right') {
        return false;
      }
    }

    return true;
  }

  render() {
    const {
      children,
      loop,
      showIndicators,
    } = this.props;

    const { index } = this.state;

    return (
      <Wrapper>
        {this.shouldShowArrow('left') && <LeftArrow onClick={() => this.onClickArrow('left')} />}

        <Content>
          <ReactSwipe
            ref={(reactSwipe) => { this.reactSwipe = reactSwipe; }}
            swipeOptions={{
              callback: this.onSlideChange,
              continuous: loop,
            }}
          >
            {children}
          </ReactSwipe>

          {showIndicators && (
            <Indicators>
              {children.map((item, i) => (
                <IndicatorDot
                  key={`indicator-${item.key}`}
                  selected={index === i}
                  onClick={() => this.changeSlide(i)}
                />
              ))}
            </Indicators>
          )}
        </Content>

        {this.shouldShowArrow('right') && <RightArrow onClick={() => this.onClickArrow('right')} />}
      </Wrapper>
    );
  }
}

Carousel.defaultProps = {
  loop: true,
};

Carousel.propTypes = {
  showArrows: PropTypes.bool,
  showIndicators: PropTypes.bool,
  children: PropTypes.array.isRequired,
  onSlideChange: PropTypes.func,
  loop: PropTypes.bool,
};

export default Carousel;
