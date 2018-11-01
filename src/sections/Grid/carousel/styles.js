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
  padding: 2rem 8.5rem;

  @media screen and (max-width: 1280px) {
    padding: 2rem 0;
  }
`;

export const Heading = SectionHeading.extend`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colours.contrast};

  @media ${mediaQueries.MAX_TABLET} {
    font-size: 2.2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    display: none;
  }
`;

export const Description = SectionDescription.extend`
  margin-top: 1rem;
  max-width: 500px;
`;

export const Space = styled.div`
  height: 4rem;

  @media ${mediaQueries.MAX_MOBILE} {
    height: 0;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  padding: 0 4rem;
  box-sizing: border-box;
  @media ${mediaQueries.MAX_TABLET} {
    padding: 0;
  }
`;

export const BufferItem = styled.div`
  flex: 1;
  margin: 2rem;
  max-width: 26rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin: 2rem;
  max-width: 26rem;
  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 100%;
  }
`;

export const Image = styled.img`
  margin-bottom: 1rem;
`;

export const Testimonial = styled.div`
  color: ${({ theme }) => theme.colours.contrast};
  text-align: center;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.6rem;
  line-height: normal;
  font-weight: 300;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.4rem;
  }
`;

export const Attribution = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colours.contrast};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  line-height: normal;
  font-weight: 500;
`;
