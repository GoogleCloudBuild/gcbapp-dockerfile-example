import styled from 'styled-components';

import mediaQueries from '../../../styles/mediaQueries';
import Section from '../../../components/Section';
import {
  SectionHeading, SectionSubHeading, SectionDescription,
} from '../../../components/typography';

export const Heading = styled(SectionHeading)`
  max-width: 570px;
  margin: 0 auto 3.3rem;
  font-size: 1.6rem;
  font-weight: bold;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.28rem;
    margin-bottom: 2.7rem;
  }
`;

export const SubHeading = styled(SectionSubHeading)`
  margin: 0 auto 2rem;
`;

export const Description = styled(SectionDescription)`
  margin: 0 auto 1rem;
`;

export const MarqueeSection = styled(Section)`
  padding: 4rem 0;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 4rem 0;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 2.7rem 0;
  }
`;
