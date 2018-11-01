import styled from 'styled-components';
import { SectionHeading, SectionSubHeading } from '../../../components/typography';
import mediaQueries from '../../../styles/mediaQueries';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto 5rem;
  position: relative;
  @media ${mediaQueries.MAX_TABLET} {
    margin: 0 auto;
  }
  @media ${mediaQueries.MAX_MOBILE} {
  }
`;

export const Heading = SectionHeading.extend`
  margin: 2.5rem auto;
  position: relative;
  font-size: ${({ options }) => (options && options.size ? `${options.size / 10}rem` : '2rem')};
  text-align: ${({ options }) => (options && options.alignment ? options.alignment : 'left')};

  @media ${mediaQueries.MAX_MOBILE} {
    max-width: none;
    width: 100%;
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
`;

export const SubHeading = SectionSubHeading.extend`
  margin: 1rem auto 2.5rem;
  max-width: 61rem;
  text-align: left;
  font-weight: 700;
`;
