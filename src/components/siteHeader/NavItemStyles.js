import styled from 'styled-components';

import Link from '../Link';
import { BaseText } from '../../styles/theme';
import mediaQueries from '../../styles/mediaQueries';

export const MenuItemContainer = styled.div`
  margin: 2.56rem 1.8rem 0;
  display: flex;
  align-items: center;
  a {
    color: #656984;
    text-decoration: none;
  }
  i {
    margin-left: 0.8rem;
    font-size: 1.8rem;
    color: #656984;
  }

  @media ${mediaQueries.MAX_TABLET} {
    margin: 0 3rem 1.6rem;
    justify-content: space-between;
    a {
      font-size: 1.4rem;
    }
  }
`;

export const MenuSingleItemContainer = MenuItemContainer.extend`
  margin: 2.56rem 1.8rem 0;
  line-height: 2.1rem;
  color: #656984;
`;

export const MenuTitle = BaseText.extend`
  white-space: nowrap;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.1rem;
  letter-spacing: 0.5px;
  &:hover {
     cursor: pointer;
   }
  @media ${mediaQueries.MAX_TABLET} {
    font-size: 0.875rem;
  }
`.withComponent(Link);

export const MenuLink = MenuTitle.extend`
  text-decoration: none;

  color: ${(props) => props.theme.colours.nav.text};

  i {
    font-size: 2rem;
    position: relative;
    padding-left: 0.5rem;
    top: 0.3rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${mediaQueries.MAX_TABLET} {
    float: right;

    i {
      font-size: 2rem;
      top: -0.1875rem;
      padding-right: 1.375rem;
    }
  }
`;

export const ActiveMenuTitle = MenuLink.extend`
  color: ${(props) => props.theme.colours.callToAction};
  @media ${mediaQueries.MAX_TABLET} {
    white-space: nowrap;
    float: none;
    font-size: 1.4rem;
    i {
      color: ${(props) => props.theme.colours.callToAction};
    }
  }
`.withComponent('span');

export const ActiveOnPageTitle = ActiveMenuTitle.extend`
  font-weight: 700;
`;
