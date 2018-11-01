import React from 'react';
import PropTypes from 'prop-types';

import Check from '../../../images/svgIcons/Check.svg';
import {
  Section,
  SectionContent,
  MobileColumn,
  TextColumn,
  ImageColumn,
  Heading,
  SubHeading,
  Image,
  Description,
  Button,
} from './styles';

const IllustratedRightTextSection = ({ data, ...rest }) => {
  const {
    heading,
    subHeading,
    text,
    image,
    button,
  } = data;

  return (
    <Section {...rest}>
      <SectionContent>
        {heading && <Heading mobile>{heading}</Heading>}
        {subHeading && <SubHeading mobile>{subHeading}</SubHeading>}
        <MobileColumn>
          <TextColumn>
            {heading && <Heading>{heading}</Heading>}
            {subHeading && <SubHeading>{subHeading}</SubHeading>}
            {text && <Description options={{ breaks: true }} bullet={Check}>{text.text}</Description>}
            {button && <Button data={button[0]} />}
          </TextColumn>
          <ImageColumn>
            {image && <Image src={image.file.url} alt={image.file.description} />}
          </ImageColumn>
        </MobileColumn>
      </SectionContent>
    </Section>
  );
};

IllustratedRightTextSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IllustratedRightTextSection;
