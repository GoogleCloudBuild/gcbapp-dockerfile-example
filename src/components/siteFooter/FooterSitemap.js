import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

import Link from '../Link';
import {
  SitemapGrid,
  Heading,
  FooterLink,
  LinksColumn,
  ImageIcon,
  FooterInlineLink,
  MultiColumns,
  FooterColumn,
  SocialColumn,
} from './FooterSitemapStyles';

const MAX_ROWS_PER_COL_IN_FOOTER = {
  0: 7,
  1: 13,
  2: 7,
  fallback: 9,
};

const FooterSitemap = ({ entry }) => {
  const { leftColumn, centerColumn, rightColumn } = entry;
  return (
    <SitemapGrid fluid>
      <Row>
        <MultiColumns sm={12} md={6} lg={4}>
          {leftColumn.map((leftColumnItem) => <FooterSection key={leftColumnItem.link.text} entry={leftColumnItem} />)}
        </MultiColumns>

        <MultiColumns sm={4} md={2} lg={5} collapseInMobile>
          {centerColumn.map((centerColumnItem) => (
            <FooterSection key={centerColumnItem.link.text} entry={centerColumnItem} collapseinmobile />
          ))}
        </MultiColumns>

        <SocialColumn sm={12} md={4} lg={3}>
          {rightColumn.map((rightColumnItem) => (
            <FooterSection key={rightColumnItem.link.text} entry={rightColumnItem} />
          ))}
        </SocialColumn>
      </Row>
    </SitemapGrid>
  );
};

FooterSitemap.propTypes = {
  entry: PropTypes.object,
};

const FooterSection = ({ entry, collapseinmobile }) => {
  const flattenedMenuItems = entry.displayGrid ? entry.items : entry.items[0].items;
  const data = {
    columns: [],
    numberOfColumns: 0,
  };

  flattenedMenuItems.map((item) => {
    data.columns[data.numberOfColumns] = data.columns[data.numberOfColumns] || [];

    const maxRowsForColumnReached = (data.columns[data.numberOfColumns].length === (
      MAX_ROWS_PER_COL_IN_FOOTER[data.numberOfColumns]
      || MAX_ROWS_PER_COL_IN_FOOTER.fallback)
    );

    const addColumn = () => {
      data.numberOfColumns += 1;
      data.columns[data.numberOfColumns] = [];
    };

    if (maxRowsForColumnReached) {
      addColumn();
    }

    return data.columns[data.numberOfColumns].push(item);
  });

  const colWidth = Math.ceil(12 / data.columns.length);

  return (
    <FooterColumn>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Heading>{entry.link.text}</Heading>
        </Col>
      </Row>
      <Row>
        {data.columns && data.columns.map((column) => (
          <LinksColumn
            key={JSON.stringify(column)}
            xs={colWidth}
            sm={colWidth}
            md={colWidth}
            lg={colWidth}
            collapseInMobile={collapseinmobile}
          >
            {column && column.map((menuItem, index) => {
              const image = menuItem.link.image;
              return (image
                ? (
                  <FooterInlineLink index={index} key={menuItem.link.contentful_id}>
                    <ImageIcon data={menuItem.link} />
                  </FooterInlineLink>
                )
                : <FooterLink key={menuItem.contentful_id}><Link data={menuItem.link} /></FooterLink>
              );
            })}
          </LinksColumn>
        ))}
      </Row>
    </FooterColumn>);
};

FooterSection.propTypes = {
  entry: PropTypes.object.isRequired,
  collapseinmobile: PropTypes.bool,
};

export default FooterSitemap;
