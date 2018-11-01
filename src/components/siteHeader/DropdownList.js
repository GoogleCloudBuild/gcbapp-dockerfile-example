import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import mediaQueries from '../../styles/mediaQueries';

import {
  ListItem,
  MenuLinkTitle,
  SubSectionDivider,
  SubSectionLink,
  SubSectionTitle,
  SubSectionChevron,
  ListItems,
  SubSectionColumns,
} from './DropDownListStyles';

function DropdownList(props) {
  const {
    list,
    onClick,
    parentLink,
    theme: { currentLocale: locale },
  } = props;

  const isDevice = typeof window !== 'undefined' && window.matchMedia(mediaQueries.MAX_TABLET).matches;

  const renderList = (listItems) => listItems.map((menuLink) => {
    const to = menuLink.link.url
      ? menuLink.link.url
      : `${parentLink.url ? parentLink.url : list.link.url}${menuLink.link.url}`;

    return (
      <ListItem key={menuLink.link.contentful_id}>
        <MenuLinkTitle
          activeClassName='nav-item-active' // this will be used when we switch to internal links
          onClick={onClick}
          data={{
            url: to,
            internal: { type: 'ContentfulLinkExternal' },
          }}
          localeSlug={locale.slug}
        >
          {menuLink.link.text}
        </MenuLinkTitle>
      </ListItem>
    );
  });

  let linkItemsList = list.items;
  if (list.displayGrid) {
    const halfway = Math.ceil(list.items.length / 2);
    const leftColumn = list.items.slice(0, halfway);
    const rightColumn = list.items.slice(halfway);
    linkItemsList = [leftColumn, rightColumn];
  }

  const renderDropDownList = () => {
    if (list.displayGrid) {
      if (isDevice && (list.title === 'Admission Support' || list.title === 'Admissions Support')) {
        return <ListItems>{renderList(linkItemsList[0].concat(linkItemsList[1]))}</ListItems>;
      }
      return (
        <SubSectionColumns>
          <ListItems>{renderList(linkItemsList[0])}</ListItems>
          <ListItems>{renderList(linkItemsList[1])}</ListItems>
        </SubSectionColumns>
      );
    }
    return <ListItems>{renderList(linkItemsList)}</ListItems>;
  };

  return (
    <div>
      {list.link && (
        <SubSectionDivider>
          <SubSectionLink
            id='dropDownLinkText'
            data={{
              url: list.link.url,
              internal: { type: 'ContentfulLinkExternal' },
            }}
            onClick={onClick}
            localeSlug={locale.slug}
          >
            <SubSectionTitle>{list.link.text}</SubSectionTitle>
            <SubSectionChevron>
              <i className='zmdi zmdi-chevron-right' />
            </SubSectionChevron>
          </SubSectionLink>
        </SubSectionDivider>
      )}
      {renderDropDownList()}
    </div>
  );
}

DropdownList.defaultProps = {
  list: {},
  parentLink: {},
};

DropdownList.propTypes = {
  list: PropTypes.object,
  onClick: PropTypes.func,
  parentLink: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withTheme(DropdownList);
