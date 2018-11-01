import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import { SectionHeading, SectionSubHeading, SectionDescription } from '../../../components/typography';
import SectionBase from '../../../components/Section';

export const Section = styled(SectionBase)`
  padding: 4rem;
  @media ${mediaQueries.MAX_MOBILE} {
    padding-left: 2rem;
    padding-right: 2rem;
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
    margin-top: 2rem;
  }
`;


export const Heading = SectionHeading.extend`
  margin-bottom: 2rem;
  margin-top: 0;
  color: ${({ theme }) => theme.colours.contrast};

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.8rem;
    line-height: 1.33;
    margin-bottom: 1rem;
  }
`;

export const SubHeading = SectionSubHeading.extend`
  margin-bottom: 2rem;
  margin-top: 0;
  color: ${({ theme }) => theme.colours.contrast};
  font-size: 2.2rem;
  line-height: normal;
  font-weight: 600;
`;

export const Description = SectionDescription.extend`
  text-align: left;
  margin-top: 0;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colours.contrast};
  text-align: center;
  font-weight: 600;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.2rem;
    line-height: 1.83;
    padding-left: 2rem;
    padding-right: 2rem;
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
