import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import { SectionHeading, SectionDescription } from '../../../components/typography';

export const Section = styled.section`
  display: flex;
  flex-direction: row;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const HeadingColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 5rem;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    margin-top: 3rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    margin-right: 2rem;
    margin-top: 5rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    margin-right: 0;
    margin-bottom: 1rem;
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
  flex-flow: wrap;
  flex: 3;
  justify-content: flex-start;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    margin-top: 3rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    flex: 2;
    margin-top: 5rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: column;
    margin-top: 0;
  }
`;
