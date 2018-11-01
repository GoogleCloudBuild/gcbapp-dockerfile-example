import React from 'react';
import PropTypes from 'prop-types';

import DropdownList from './DropdownList';
import mediaQueries from '../../styles/mediaQueries';

import {
  MenuGrid,
  NavWidth,
  MenuColumn,
  MenuList,
  MenuDropdownContainer,
} from './MenuDropDownStyles';

export default function MenuDropdown(props) {
  const {
    items,
    displayGrid,
    onCloseDropdown,
    onClickHamburger,
    onClickStickyHeader,
    parentLink,
    id,
    isOpen,
  } = props;

  const renderDeviceView = () => (
    <div>
      {items.map((list) => (
        <DropdownList
          key={list.contentful_id}
          list={list}
          parentLink={parentLink}
          onClick={() => {
            onCloseDropdown();
            onClickHamburger();
            onClickStickyHeader();
          }}
        />
      ))}
    </div>
  );

  const renderDesktopGridView = () => (
    <MenuGrid>
      <NavWidth>
        {items.map((list) => (
          <MenuColumn key={list.contentful_id}>
            <DropdownList
              list={list}
              parentLink={parentLink}
              onClick={() => onCloseDropdown()}
            />
          </MenuColumn>
        ))}
      </NavWidth>
    </MenuGrid>
  );

  const renderDesktopListView = () => (
    <MenuList>
      {items.map((list) => (
        <DropdownList
          key={list.contentful_id}
          list={list}
          parentLink={parentLink}
          onClick={() => onCloseDropdown()}
        />
      ))}
    </MenuList>
  );

  const renderDesktopView = () => (displayGrid ? renderDesktopGridView() : renderDesktopListView());

  const renderResponsiveView = () => (
    (typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_TABLET).matches)
      ? renderDeviceView()
      : renderDesktopView()
  );

  return (
    <MenuDropdownContainer id={id} isOpen={isOpen}>
      {renderResponsiveView()}
    </MenuDropdownContainer>
  );
}

MenuDropdown.defaultProps = {
  items: [],
  parentLink: {},
};

MenuDropdown.propTypes = {
  items: PropTypes.array,
  displayGrid: PropTypes.bool,
  onCloseDropdown: PropTypes.func,
  onClickHamburger: PropTypes.func,
  onClickStickyHeader: PropTypes.func,
  parentLink: PropTypes.object,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
};
