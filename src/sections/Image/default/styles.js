import styled from 'styled-components';
import { SectionHeading, SectionSubHeading } from '../../../components/typography';
import mediaQueries from '../../../styles/mediaQueries';

export const Section = styled.section`
  width: 61rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: ${(props) => props.zIndex || 'auto'};

  @media ${mediaQueries.MAX_TABLET} {
    margin: 0 auto;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    width: 100%;
    padding: 0 5rem;
  }
`;

export const Heading = SectionHeading.extend`
  margin-bottom: 2.5rem;
  max-width: 500px;
  font-size: 2rem;
  text-align: left;

  @media ${mediaQueries.MAX_MOBILE} {
    max-width: none;
    width: 100%;
  }
`;

export const SubHeading = SectionSubHeading.extend`
  margin-bottom: 2.5rem;
  text-align: left;
  font-weight: 700;
`;

export const Image = styled.img`
  margin-top: 1rem;
  position: relative;
  width: 100%;
  height: auto;
  align-self: center;
`;
