import styled from 'styled-components';

import { BaseText, BaseMenu } from '../../styles/theme';
import mediaQueries from '../../styles/mediaQueries';
import Link from '../Link';

const BaseLiText = BaseMenu.withComponent('li');
const BaseSpanText = BaseMenu.withComponent('span');
const BaseUlText = BaseText.withComponent('ul');

export const ListItem = BaseLiText.extend`
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
  }
  @media ${mediaQueries.MAX_TABLET} {
    margin: 0.5rem 0;
  }
`;

const activeClassName = 'nav-item-active';

export const MenuLinkTitle = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: ${(props) => props.theme.colours.nav.text};
  &:hover {
    color: ${(props) => props.theme.colours.callToAction};
  }
  &.${activeClassName} {
    text-decoration: none;
    color: ${(props) => props.theme.colours.callToAction};
    font-weight: 700;
  }
  @media ${mediaQueries.MAX_TABLET} {
    font-size: 1.4rem;
  }
`;

export const SubSectionDivider = styled.div`
  border-bottom: ${(props) => `solid 1px ${props.theme.colours.nav.divider}`};;
`;

export const SubSectionLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  padding-bottom: 1.3rem;
  text-decoration: none;
`;

export const SubSectionTitle = BaseSpanText.extend`
  color: ${(props) => props.theme.colours.primary};
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colours.callToAction};
  }

  @media ${mediaQueries.MAX_TABLET} {
    font-size: 1.4rem;
    margin-left: 2.8rem;
  }
`;

export const SubSectionChevron = styled.span`
  color: ${(props) => props.theme.colours.callToAction};
  font-weight: 800;
  font-size: 2rem;
  margin-left: 0.8rem;
`;

export const ListItems = BaseUlText.extend`
  list-style-type: none;
  padding: 0 1rem 0 0;
  flex: 1;
  letter-spacing: 0.05rem;
  line-height: normal;

  @media ${mediaQueries.MAX_TABLET} {
    padding-left: 4.5rem;
    li {
      margin: 1.6rem 0;
    }
  }
`;

export const SubSectionColumns = styled.div`
  display: flex;
  flex-direction: row;
`;
