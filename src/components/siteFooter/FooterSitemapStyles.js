import styled from 'styled-components';
import { Grid, Col } from 'react-flexbox-grid';
import React from 'react';

import Link from '../Link';

import { BaseText, BaseContainer } from '../../styles/theme';
import mediaQueries from '../../styles/mediaQueries';

export const SitemapGrid = BaseContainer.extend`
  padding: 2rem 0 !important;
  border-bottom: ${(props) => `1px solid ${props.theme.colours.nav.background}`};
  overflow: hidden;
  display: block;

  .col-lg .col-md .col-sm{
    padding: 0;
  }
  @media ${mediaQueries.MAX_TABLET} {
    padding-top: 0rem;
  }
`.withComponent(Grid);

export const LinksColumn = styled(({ collapseInMobile, ...rest }) => <Col {...rest} />)`
  @media ${mediaQueries.MAX_TABLET} {
    display: ${({ collapseInMobile }) => (collapseInMobile ? 'none' : 'block')};
  }
`;

export const FooterColumn = styled.div`
  margin: 0 1rem;
  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    max-width: 200px;
  }
  @media ${mediaQueries.MAX_TABLET} {
    max-width: none;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    text-align: center;
    display: flex:
    flex-direction: row;
  }
`;

export const Heading = styled.h5`
  color: ${(props) => props.theme.colours.contrast};
  line-height: 1;
  letter-spacing: 0;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  @media ${mediaQueries.MAX_TABLET} {
    font-size: 1.4rem;
  }
`;

export const SocialColumn = styled.div`
  > div {
    margin: 0 0 0 auto;
    width: fit-content;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    width: 100%;
    flex-basis: 100% !important;
    max-width: 100% !important;
    flex: 1;

    > div {
      margin: 0 auto;
    }
  }
`.withComponent(Col);

export const MultiColumns = styled(({ collapseInMobile, ...rest }) => <Col {...rest} />)`
  display: flex;
  justify-content: space-between;
  @media ${mediaQueries.MAX_TABLET} {
    display: ${(props) => (props.collapseinmobile ? 'block' : 'flex')};
  }
  @media ${mediaQueries.MAX_MOBILE} {
    display: none;
  }
`;

export const ImageIcon = styled(Link)`
  width: 35px;
  height: 30px;
  display: flex;
`;

export const FooterInlineLink = styled.div`
  display: inline-block;
  padding-top: 1rem;
  padding-right: 1.5rem;
  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    padding-right: 0.5rem;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    padding: 1rem 1rem 0;
  }
`;

export const FooterLink = BaseText.extend`
  a {
    margin: 1rem 0;
    display: block;
    line-height: 2.17;
    font-size: 1.2rem;
    font-weight: 500 !important;
    color: ${(props) => props.theme.colours.contrast};
    text-decoration: none;
  }
`;
