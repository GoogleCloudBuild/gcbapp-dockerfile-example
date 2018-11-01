import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import mediaQueries from '../../../styles/mediaQueries';
import Link from '../../../components/Link';

const ItemImage = styled.div`
  margin: 2rem .8rem;
  vertical-align: middle;
  max-width: 10rem;
`;

const ItemImageForSlider = styled(ItemImage)`
  margin: 0 0 0;
  max-width: none;
`;

const Image = styled.img`
  height: 5.3rem;
  width: auto;

  @media ${mediaQueries.MAX_MOBILE} {
    height: 3.3rem;
  }
`;

const PressReleaseItem = ({ data, forSlider }) => {
  const { image, title, link } = data;
  const renderItem = () => <Image src={image.file.url} alt={title} />;
  const Renderer = forSlider ? ItemImageForSlider : ItemImage;
  return (
    <Renderer>
      {link ? (
        <Link data={link}>
          {renderItem()}
        </Link>) : renderItem()}
    </Renderer>);
};

PressReleaseItem.propTypes = {
  data: PropTypes.object.isRequired,
  forSlider: PropTypes.bool,
};

export default PressReleaseItem;
