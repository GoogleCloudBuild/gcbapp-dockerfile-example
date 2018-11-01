import styled from 'styled-components';

import { PageHeading, PageSubHeading } from '../../../components/typography';
import SectionBase from '../../../components/Section';
import { clipSectionAngles } from '../../../styles/utilStyles';
import mediaQueries from '../../../styles/mediaQueries';

const HIDDEN_TEXT_FIX_QUERY = 'screen and (max-width: 950px)';

export const Section = styled(SectionBase)`
  ${clipSectionAngles}
  overflow: hidden;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;

  @media ${mediaQueries.MAX_TABLET} {

  }
`;

export const SlideImage = styled.img`
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: opacity 1s linear;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  z-index: -10;

  @media ${mediaQueries.MAX_TABLET} {
    max-width: none;
    max-height: 100%;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: -100px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -5;
  background-color: rgba(0,0,0,0.6);
`;

export const Heading = styled(PageHeading)`
  text-align: center;
  color: ${(props) => props.theme.colours.contrast};
  font-size: 3.6rem;
  font-weight: 700;
  max-width: 660px;
  margin: 9rem auto 5rem;

  @media ${mediaQueries.MAX_TABLET} {
    font-size: 3rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 2rem;
    margin: 4.5rem 2rem 2rem;
  }
`;

export const SubHeading = styled(PageSubHeading)`
  margin: 0;
`;

export const SlideIndicatorContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem 0;
  display: flex;
  justify-content: space-between;

  @media ${HIDDEN_TEXT_FIX_QUERY} {
    padding-top: 1rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    padding: 6rem 2rem 0;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0 2rem;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
  display: ${({ deviceOnly }) => (deviceOnly ? 'none' : 'flex')};

  @media ${HIDDEN_TEXT_FIX_QUERY} {
    padding-bottom: 5rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 2rem;
    display: ${({ deviceOnly }) => (deviceOnly ? 'flex' : 'none')};
  }
`;

export const Item = styled.div`
  color: ${({ selected, theme }) => (selected ? theme.colours.contrast : theme.colours.contrastLowlight)};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  flex: 1;
  margin: 0 2rem;
  font-size: ${({ selected }) => (selected ? '1.4rem' : '1.2rem')};
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  height: 60px;
  box-sizing: border-box;

  @media ${mediaQueries.MAX_TABLET} {
    font-weight: normal;
    margin: 0;
    padding: 0 50vw 0 2rem;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Indicator = styled.div`
  color: ${({ theme }) => theme.colours.callToAction};
  flex: 1;
  margin: 0 2rem;
  font-size: 3.6rem;
  line-height: 3rem;
  font-family: 'Montserrat', sans-serif;
  opacity: ${({ selected }) => (selected ? 1 : 0)};

  @media ${mediaQueries.MAX_TABLET} {
    opacity: ${({ index }) => (index === 0 ? 1 : 0)};
  }

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0;
  }
`;

export const SlideDotContainer = styled.div`
  margin: 1rem 2rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: fit-content;

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0 0 2rem 0;
  }
`;

export const SlideDot = styled.span`
  width: ${({ selected }) => (selected ? '10px' : '6px')};
  height: ${({ selected }) => (selected ? '10px' : '6px')};
  background-color: ${({ selected, theme }) => (selected
    ? theme.colours.callToAction : theme.colours.contrastLowlight)};
  margin: 0 1rem 0 0;
  border-radius: 51%;
  cursor: pointer;
`;
