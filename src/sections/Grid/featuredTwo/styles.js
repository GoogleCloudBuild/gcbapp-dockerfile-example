import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import { SectionHeading, SectionDescription } from '../../../components/typography';
import SectionBase from '../../../components/Section';

export const Section = styled(SectionBase)`
  padding: 0;
  overflow: visible;
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
  margin-bottom: 2rem;
  text-align: left;
  margin-top: 0;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.8rem;
    line-height: 1.33;
    margin-bottom: 1rem;
  }
`;

export const Description = SectionDescription.extend`
  text-align: left;
  margin-top: 0;
  line-height: 2.2rem;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.2rem;
    line-height: 1.83;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  flex: 1;
  justify-content: center;
  margin-top: 0;

  > a {
    min-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 2rem);
    max-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 2rem);
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0 0.5rem;
    > a {
      min-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 1rem);
      max-width: calc(calc(100% / ${({ maxRowItems }) => maxRowItems}) - 1rem);
    }
  }
`;
