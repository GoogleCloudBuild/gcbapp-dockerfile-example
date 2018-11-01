import styled from 'styled-components';
import { SectionHeading, SectionDescription } from '../../../components/typography';
import SectionBase from '../../../components/Section';
import mediaQueries from '../../../styles/mediaQueries';

export const Section = styled(SectionBase)`
  padding: 0;
`;

export const SectionContent = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 8.5rem;

  @media screen and (max-width: 1280px) {
    padding: 0;
  }
`;

export const Heading = SectionHeading.extend`
  margin-bottom: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = SectionDescription.extend`
  margin-top: 1rem;
  max-width: 500px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: flex-start;
  flex: 1;

  > a {
    min-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 2rem);
    max-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 2rem);
  }

  @media ${mediaQueries.MAX_TABLET} {
    > a {
      min-width: calc(calc(100vw / ${({ maxRowItems }) => maxRowItems - 1 || 1}) - 4rem);
      max-width: calc(calc(100vw / ${({ maxRowItems }) => maxRowItems - 1 || 1}) - 2rem);
    }
  }

  @media ${mediaQueries.MAX_MOBILE} {
    > a {
      min-width: calc(100vw - 4rem);
      max-width: calc(100vw - 2rem);
    }
  }
`;
