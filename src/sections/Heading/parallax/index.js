import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Link from '../../../components/Link';
import { ParallaxContent, Heading, SubHeading } from './styles';

const ParallaxHeadingSection = (props) => {
  const {
    backgroundImage, heading, subHeading, button,
  } = props.data;
  return (
    <Parallax
      bgImage={`${backgroundImage && backgroundImage.file.url}?fm=jpg&fl=progressive&q=80`}
      bgAlt={backgroundImage && backgroundImage.description}
      strength={350}
      blur={1}
    >
      <ParallaxContent>
        <Heading>
          {heading}
        </Heading>
        <SubHeading>
          {subHeading}
        </SubHeading>
        {button && <Link data={button[0]} />}
      </ParallaxContent>
    </Parallax>
  );
};

ParallaxHeadingSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ParallaxHeadingSection;
