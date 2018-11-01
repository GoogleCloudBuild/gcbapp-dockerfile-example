import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Heading,
  SubHeading,
  Image,
} from './styles';

const DefaultImageSection = ({ data, zIndex }) => {
  const { heading, subHeading, image } = data;

  return (
    <Section zIndex={zIndex}>
      {heading && <Heading>{heading}</Heading>}
      {subHeading && <SubHeading>{subHeading}</SubHeading>}
      {image && <Image src={image.file.url} alt={image.description} />}
    </Section>
  );
};

DefaultImageSection.propTypes = {
  data: PropTypes.object.isRequired,
  zIndex: PropTypes.number,
};

export default DefaultImageSection;
