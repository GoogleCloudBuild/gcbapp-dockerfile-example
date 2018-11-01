import React from 'react';
import PropTypes from 'prop-types';
import mediaQueries from '../../../styles/mediaQueries';

import { SectionHeading, PageHeading } from '../../../components/typography';
import { Section, Image, Description } from './styles';

const DefaultTextSection = ({ data, index }) => {
  const { heading, text, image } = data;

  const Heading = index === 0
    ? PageHeading.extend`
    margin: 5rem 0 0;
    font-size: 3.6rem;
    color: ${(props) => props.theme.colours.primary};
    @media ${mediaQueries.MAX_MOBILE} {
      font-size: 2.4rem;
      margin: 3rem 0 0;
    }
  `
    : SectionHeading.extend`
    margin-bottom: 0;
    max-width: 500px;
    font-size: 3.2rem;
  `;

  return (
    <Section>
      {heading && <Heading>{heading}</Heading>}
      {image && <Image src={image.file.url} alt={image.file.description} />}
      {text && <Description options={{ breaks: true }}>{text.text}</Description>}
    </Section>
  );
};

DefaultTextSection.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object,
  index: PropTypes.number,
};

export default DefaultTextSection;
