import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';
import { ItemHeading, ItemDescription } from '../../../components/typography';

const Container = styled.div`
  position: relative;
  margin: 0 0 2rem;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 0 2rem 0 0;
  box-shadow: none;

  @media ${mediaQueries.MAX_TABLET} {
    width: 50%;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    width: 100%;
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const Heading = ItemHeading.extend`
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: left;
  text-transform: uppercase;
  font-size: 12px;
`;

const Description = ItemDescription.extend`
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
  font-size: 1.4rem;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.2rem;
  }
`;

const CustomItem = ({ data }) => {
  const { heading, description } = data;
  return (
    <Container>
      {heading && <Heading>{heading}</Heading>}
      {description && <Description>{description.description}</Description>}
    </Container>
  );
};

CustomItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CustomItem;
