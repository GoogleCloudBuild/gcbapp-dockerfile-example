import styled from 'styled-components';
import { Markdown, SectionHeading, SectionSubHeading } from '../../../components/typography';
import SectionBase from '../../../components/Section';
import Link from '../../../components/Link';
import mediaQueries from '../../../styles/mediaQueries';

export const Section = styled(SectionBase)`
  padding: 0;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  max-width: 124rem;
  margin: 0 auto;
  padding: 4rem 8.5rem;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 4rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 2rem 0;
  }
`;

export const MobileColumn = styled.div`
  display: flex;
  flex-direction: row;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: column-reverse;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  max-width: 45%;

  @media ${mediaQueries.MAX_TABLET} {
    max-width: 50rem;
    margin: 2rem 2rem 2rem 0;
    padding: 0;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 40rem;
    padding: 0 2rem;
    margin: 0;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  max-width: 45%;

  @media ${mediaQueries.MAX_TABLET} {
    max-width: 50rem;
    margin: 2rem 0 2rem 3rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 40rem;
    margin: 2rem 0;
    padding: 0 2rem;
  }
`;

export const Heading = styled(SectionHeading)`
  font-size: 3rem;
  text-align: left;
  display: ${({ mobile }) => (mobile ? 'none' : 'block')};
  max-width: 70%;

  @media ${mediaQueries.MAX_TABLET} {
    display: ${({ mobile }) => (mobile ? 'block' : 'none')};
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

export const SubHeading = styled(SectionSubHeading)`
  font-size: 1.6rem;
  color: #6e6e6e;
  display: ${({ mobile }) => (mobile ? 'none' : 'block')};
  max-width: 80%;
  font-weight: normal;
  text-align: left;

  @media ${mediaQueries.MAX_TABLET} {
    display: ${({ mobile }) => (mobile ? 'block' : 'none')};
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Description = Markdown.extend`
  font-size: 1.6rem;
  color: #6e6e6e;

  ul {
    padding-left: 2em;
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Button = styled(Link)`
  margin-left: 0;
  margin-top: 2.5rem;

  @media ${mediaQueries.MAX_TABLET} {
    margin: 2.5rem auto;
  }
`;
