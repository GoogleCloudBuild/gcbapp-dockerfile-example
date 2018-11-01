import React from 'react';
import PropTypes from 'prop-types';
import MenuDropdown from './MenuDropdown';
import theme from '../../styles/theme';

import {
  MenuTitle,
  ActiveMenuTitle,
  MenuItemContainer,
  MenuSingleItemContainer,
} from './NavItemStyles';

function NavItem(props) {
  const {
    navItem,
    isOpen,
    onOpen,
    onCloseDropdown,
    onClickHamburger,
    onClickStickyHeader,
    id,
  } = props;
  const {
    link,
    displayGrid,
    hideDropdown,
    items,
  } = navItem;
  const handleSelfClick = () => (isOpen ? onCloseDropdown() : onOpen());

  const getMenuLink = (menuProps, text) => {
    if (isOpen) {
      return (
        <ActiveMenuTitle {...menuProps}>
          {text}
        </ActiveMenuTitle>
      );
    }
    return <MenuTitle {...menuProps}>{text}</MenuTitle>;
  };

  return (
    <div>
      {hideDropdown
        ? (
          <MenuSingleItemContainer>
            {getMenuLink({
              id,
              onClick: () => {
                onCloseDropdown();
                onClickHamburger();
                onClickStickyHeader();
              },
              data: {
                url: link.url,
                internal: { type: 'ContentfulLinkExternal' },
              },
            }, link.text)}
          </MenuSingleItemContainer>
        )
        : (
          <div>
            <MenuItemContainer
              onClick={handleSelfClick}
              tabIndex={0}
            >
              {getMenuLink({
                id,
                data: {
                  internal: { type: 'ContentfulLinkExternal' },
                },
              }, link.text)}
              <i
                className={`zmdi ${isOpen ? 'zmdi-caret-up' : 'zmdi-caret-down'}`}
                style={isOpen ? { color: theme.colours.callToAction } : {}}
              />
            </MenuItemContainer>
            <MenuDropdown
              id={`${id}_dropdown`}
              items={items}
              displayGrid={displayGrid}
              onCloseDropdown={onCloseDropdown}
              onClickHamburger={onClickHamburger}
              onClickStickyHeader={onClickStickyHeader}
              parentLink={link}
              isOpen={isOpen}
            />
          </div>
        )
      }
    </div>
  );
}

NavItem.propTypes = {
  navItem: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onCloseDropdown: PropTypes.func,
  onClickHamburger: PropTypes.func,
  onClickStickyHeader: PropTypes.func,
  id: PropTypes.string,
};
/* eslint jsx-a11y/no-static-element-interactions: 0 */

export default NavItem;
