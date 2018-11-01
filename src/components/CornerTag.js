import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import mediaQueries from '../styles/mediaQueries';

const TOP_LEFT = 'top-left';
const TOP_RIGHT = 'top-right';
const BOTTOM_LEFT = 'bottom-left';
const BOTTOM_RIGHT = 'bottom-right';

const topLeft = css`
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0, 0 100%);
`;

const topRight = css`
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  align-items: flex-end;
`;

const bottomLeft = css`
  bottom: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  justify-content: flex-end;
`;

const bottomRight = css`
  bottom: 0;
  right: 0;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  align-items: flex-end;
  justify-content: flex-end;
`;

const CornerTag = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 6.8rem;
  width: 9.5rem;
  background-color: ${({ theme, backgroundColour }) => theme.colours[backgroundColour]};
  color: ${({ theme, textColour }) => theme.colours[textColour]};
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  padding: 1.5rem;
  z-index: 5;
  ${({ position }) => {
    if (position === TOP_LEFT) {
      return topLeft;
    }
    if (position === TOP_RIGHT) {
      return topRight;
    }
    if (position === BOTTOM_LEFT) {
      return bottomLeft;
    }
    if (position === BOTTOM_RIGHT) {
      return bottomRight;
    }
    return topLeft;
  }}

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1rem;
    height: 5.1rem;
    width: 7.125rem;
    padding: 1rem;
  }
`;

CornerTag.defaultProps = {
  position: TOP_LEFT,
  backgroundColour: 'primary',
  textColour: 'contrast',
};

CornerTag.propTypes = {
  position: PropTypes.oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT]),
  backgroundColour: PropTypes.string,
  textColour: PropTypes.string,
};

export default CornerTag;
