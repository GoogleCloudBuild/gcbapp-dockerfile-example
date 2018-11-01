import React from 'react';
import PropTypes from 'prop-types';

import {
  ItemContainer,
  ItemImage,
  ItemHeading,
  ItemDescription,
} from './styles';

const Item = ({ data }) => {
  const { image, heading, description } = data;
  return (
    <ItemContainer>
      <ItemImage src={image.file.url} height='40px' width='auto' alt={heading} />
      <ItemHeading>{heading}</ItemHeading>
      <ItemDescription>{description.description}</ItemDescription>
    </ItemContainer>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
