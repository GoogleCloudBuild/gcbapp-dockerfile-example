import styled from 'styled-components';
import mediaQueries from '../styles/mediaQueries';
import {
  getOffset,
  getBackgroundColour,
  getZIndex,
  getPadding,
  getMargin,
} from '../styles/utilStyles';

const Section = styled.section`
  display: block;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  min-height: 3rem;
  padding: 2rem;

  ${getPadding}
  ${getMargin}
  ${getBackgroundColour}
  ${getZIndex}
  ${getOffset}

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {

  }
`;

export default Section;
