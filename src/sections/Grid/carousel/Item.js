import React from 'react';
import PropTypes from 'prop-types';

import {
  ItemContainer,
  Testimonial,
  Attribution,
  Image,
} from './styles';

const Item = ({ data }) => {
  const {
    contentful_id: id,
    testimonial,
    testimonialImage,
    attribution,
  } = data;

  return (
    <ItemContainer>
      {testimonialImage && <Image src={testimonialImage.file.url} />}
      <Testimonial>
        {testimonial.content
          .map(({ content }) => content
            .map((node) => <div key={`testimonial-${id}`}>{node.value}</div>))
        }
      </Testimonial>
      <Attribution>
        {attribution.content
          .map(({ content, data: embedded, nodeType }) => {
            if (content.length) {
              return content.map((node) => <div key={node.value.slice(0, 20)}>{node.value}</div>);
            }
            if (nodeType === 'embedded-asset-block') {
              return <Image key={`attribution-${id}`} src={embedded.target.fields.file.en_NZ.url} />;
            }
            return null;
          })
        }
      </Attribution>
    </ItemContainer>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
