import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import mediaQueries from '../../../styles/mediaQueries';
import { ItemHeading } from '../../../components/typography';
import CornerTag from '../../../components/CornerTag';

const Container = styled.a`
  position: relative;
  margin: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  flex: 1;
  height: 300px;
  background-color: ${({ theme }) => theme.colours.contrastLowlight};
  cursor: pointer;
  transition: all 0.2s linear;
  text-decoration: none;

  :hover {
    transform: translateY(-1rem);
    box-shadow: 0 2px 12px 3px hsla(0,0%,89%,.55);
  }

  @media ${mediaQueries.MAX_TABLET} {
  }

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0 0.5rem 1rem;
    height: 200px;
  }
`;

const Heading = ItemHeading.extend`
  margin: 0;
  text-align: center;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colours.contrast};
  line-height: normal;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.6rem;
  }
`;

const Image = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  background: url(${({ imageUrl }) => imageUrl}) rgba(0,0,0,0.4);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  overflow: hidden;

  ${Container}:hover & {
    background: url(${({ imageUrl }) => imageUrl}) rgba(0,0,0,0.2);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
  }

  @media ${mediaQueries.MAX_TABLET} {
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 1rem;
  }
`;

const Caption = styled.div`
  width: 100%;
  height: 44px;
  color: ${({ theme }) => theme.colours.contrast};
  background-color: ${({ theme }) => theme.colours.backgroundContrast};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 1rem 2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

const SpotsLeft = styled.span`
  text-transform: uppercase;
  text-align: right;
  margin-left: 0.5rem;
  flex: 1;
`;

const CornerCaptions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  height: 44px;
  font-weight: 500;
  padding: 0 4rem;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 0.5rem 2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    height: 22px;
  }
`;

const Departure = styled.span`
  flex: 2;
`;

const Departing = styled.span`
  @media ${mediaQueries.MAX_MOBILE} {
    display: none;
  }
`;

const InternationalTourItem = ({ data }) => {
  const {
    name,
    country,
    spotsLeft,
    startDate,
    tourLength,
    image,
    url,
    new: isNew,
  } = data;
  const start = moment(startDate);
  const tourDate = start.format('MMMM YYYY');

  return (
    <Container href={url} title={name}>
      <Image imageUrl={image && image.file.url}>
        {isNew && (
          <CornerTag backgroundColour='backgroundContrast'>New</CornerTag>
        )}
        {name && <Heading>{name}</Heading>}
        <CornerCaptions>
          <span>{country}</span>
          <span>{`${tourLength} days`}</span>
        </CornerCaptions>
      </Image>
      <Caption>
        <Departure>
          <Departing>Departing next: </Departing>
          <span>{tourDate}</span>
        </Departure>
        <SpotsLeft>{spotsLeft ? `${spotsLeft} spots left!` : 'Full'}</SpotsLeft>
      </Caption>
    </Container>
  );
};

InternationalTourItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InternationalTourItem;
