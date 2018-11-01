import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemHeading, ItemDescription } from '../../../components/typography';
import Link from '../../../components/Link';

const Container = styled.div`
  position: relative;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 0.5rem;
  background: white;
  border-radius: 8px;
  text-align: center;
  padding: 1rem 1rem 0;
  box-shadow: none;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  &:hover {
    transform: translate(0, -1.25rem);
    box-shadow: 0 2px 12px 3px rgba(228, 228, 228, 0.55);
    a {
      opacity: 1;
    }
  }
`;

const Heading = ItemHeading.extend`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colours.callToActionHighlight};
  font-size: 12px;
`;

const Description = ItemDescription.extend`
  margin-top: 0;
  margin-bottom: 0;
`;

const MoreInfoButton = styled(Link)`
  opacity: 0;
`;

const ServiceItem = ({ data }) => {
  const {
    name, heading, subHeading, description, image, page,
  } = data;
  return (
    <Container>
      {image && <img src={image.file.url} height='40px' width='auto' alt='' />}
      {(heading && (
        <Heading>
          {heading}
        </Heading>
      )) || (name && (
        <Heading>
          {name}
        </Heading>
      ))}
      {(subHeading && (
        <Description>
          {subHeading}
        </Description>
      )) || (description && (
        <Description>
          {description.description}
        </Description>
      ))}
      {page
        ? (
          <MoreInfoButton
            data={{
              text: 'Learn more',
              theme: 'Primary Filled',
              internal: { type: 'ContentfulLinkInternal' },
              page,
            }}
          />
        )
        : (
          <MoreInfoButton
            data={{
              text: 'Contact us',
              theme: 'Primary Filled',
              internal: { type: 'ContentfulLinkInternal' },
              page: { slug: 'contact-us' },
            }}
          />
        )}
    </Container>
  );
};

ServiceItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceItem;
