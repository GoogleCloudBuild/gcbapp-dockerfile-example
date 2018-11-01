import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import {
  SectionHeading as SectionHeadingBase,
  ItemHeading as ItemHeadingBase,
  ItemDescription as ItemDescriptionBase,
} from '../../../components/typography';
import SectionBase from '../../../components/Section';

export const Section = styled(SectionBase)`
  @media ${mediaQueries.MAX_MOBILE} {
    padding: 2rem 0;
  }
`;

export const SectionContent = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 8.5rem;

  @media screen and (max-width: 1280px) {
    padding: 0;
  }
`;

export const Heading = styled(SectionHeadingBase)`
  margin-bottom: 0;
  max-width: 570px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  margin-top: 3rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10rem;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    padding: 0 5rem;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0 0.5rem;
  }
`;

export const ItemContainer = styled.div`
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin: 1rem;
  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 12rem;
  }
`;

export const ItemImage = styled.img`
  max-width: 12rem;
  height: 12rem;
  display: block;
  @media ${mediaQueries.MAX_MOBILE} {
    max-width: 9rem;
    height: auto;
  }
`;

export const ItemHeading = styled(ItemHeadingBase)`
  width: 23rem;
  margin-bottom: 0;
  margin-top: 1rem;
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 12px;
    max-width: 12rem;
  }
`;

export const ItemDescription = styled(ItemDescriptionBase)`
  margin-top: 1rem;
  width: 23rem;
  line-height: normal;
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 12.8px;
    max-width: 15rem;
  }
`;
