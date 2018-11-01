import styled from 'styled-components';

import mediaQueries from '../../styles/mediaQueries';

export const Container = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: none;
  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    margin: 3rem 0;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    margin: 3rem 0;
    padding: 0;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 374px) {
    flex-direction: column-reverse;
  }
`;

export const SmallPrint = styled.div`
  font-size: 1rem;
  color: white;
  line-height: 2.2;
  letter-spacing: normal;
  padding-right: 2rem;
  white-space: nowrap;
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 0.9rem;
    padding-right: 0;
  }
`;

export const SmallPrintLink = SmallPrint.extend`
  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    &:hover {
      opacity: 1 !important;
    }
    @media ${mediaQueries.MAX_MOBILE} {
      font-size: 0.9rem;
    }
  }
`;

export const MadeWithLove = styled.div`
  text-align: right;
  font-weight: bold;
  color: #d4d5dc;
  letter-spacing: 0.7px;
  flex: 1;
  @media ${mediaQueries.MAX_MOBILE} {
    padding-bottom: 2rem;
    text-align: center;
  }
`;
