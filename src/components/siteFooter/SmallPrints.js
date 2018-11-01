import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import {
  Container, SmallPrintLink, SmallPrint, MadeWithLove, Links,
} from './SmallPrintsStyles';

const SmallPrints = ({ entry }) => {
  const { items } = entry;
  return (
    <Container>
      <Links>
        {
          items.map((item) => (
            (item.url)
              ? <SmallPrintLink key={item.contentful_id}><Link data={item} /></SmallPrintLink>
              : <SmallPrint key={item.contentful_id}>{item.text}</SmallPrint>
          ))
        }
      </Links>
      <MadeWithLove>Made with <span role='img' aria-label='heart'>❤️</span> by Crimson experts.</MadeWithLove>
    </Container>
  );
};

SmallPrints.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default SmallPrints;
