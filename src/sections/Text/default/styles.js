import styled from 'styled-components';
import { Markdown } from '../../../components/typography';
import mediaQueries from '../../../styles/mediaQueries';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Description = Markdown.extend`
  margin: 0 auto;
  font-size: 1.6rem;
  color: #6e6e6e;
  width: 61rem;
  @media ${mediaQueries.MAX_MOBILE} {
    width: 100%;
    margin: 1rem auto;
  }
`;

export const Image = styled.img`
  margin: 3rem auto 2rem;
  width: 65rem;
  @media ${mediaQueries.MAX_MOBILE} {
    width: 100%;
    margin: 2rem auto 0;
  }
`;
