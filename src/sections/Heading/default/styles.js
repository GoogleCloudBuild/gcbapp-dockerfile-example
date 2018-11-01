import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import { PageHeading, PageSubHeading } from '../../../components/typography';

export const Section = styled.section`
  position: relative;
`;

export const Heading = PageHeading.extend`
  color: ${(props) => props.theme.colours.primary};
  max-width: 60rem;
  margin: 3rem auto 1rem;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 2.6rem;
    margin: 2rem auto 1rem;
  }
`;

export const SubHeading = PageSubHeading.extend`
  color: ${(props) => props.theme.colours.secondary};
  max-width: 41rem;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 1rem auto 2rem;

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 1rem 2rem 2rem;
  }
`;
