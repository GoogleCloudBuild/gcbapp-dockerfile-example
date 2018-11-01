import styled from 'styled-components';
import mediaQueries from '../../styles/mediaQueries';

export const Marquee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: -3rem;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    padding: 0 5rem;
  }
`;

export const ScrollingItem = styled.div`
  transition-duration: ${(props) => (props.mode === 'slide'
    ? `${props.slideDuration}s`
    : 0)};
  transform: ${(props) => (props.mode === 'slide'
    ? `translate(-${props.slideDistance}px, 0)`
    : '')};
  transition-timing-function: easeInOutQuad;
  position: relative;
  padding: 0 2rem;
`;
