import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../components/Link';
import { Section, Heading, SubHeading } from './styles';

const DefaultHeadingSection = (props) => {
  const {
    heading, subHeading, button,
  } = props.data;
  return (
    <Section>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      {button && <Link data={button[0]} />}
    </Section>
  );
};

DefaultHeadingSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultHeadingSection;
