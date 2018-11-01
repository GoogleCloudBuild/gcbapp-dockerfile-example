import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import mediaQueries from '../../../styles/mediaQueries';
import { ItemHeading } from '../../../components/typography';
import CornerTag from '../../../components/CornerTag';

const Container = styled.a`
  position: relative;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  padding: 0;
  box-shadow: 0 1px 6px 0 rgba(195, 195, 195, 0.5);
  flex: 1;
  height: 300px;
  background-color: ${({ theme }) => theme.colours.contrast};
  cursor: pointer;
  transition: all 0.2s linear;
  text-decoration: none;

  :hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 4px 8px 0 rgba(195, 195, 195, 0.5);
  }

  @media ${mediaQueries.MAX_TABLET} {
  }

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0 auto 1rem;
    height: 100px;
    flex-direction: row;
  }
`;

const Heading = ItemHeading.extend`
  margin: 0;
  text-align: left;
  font-size: 2rem;
  color: ${({ theme }) => theme.colours.primary};
  line-height: normal;
  padding: 0 2rem;

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`;

const Image = styled.div`
  position: relative;
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
  height: 184px;

  ${Container}:hover & {
    background: url(${({ imageUrl }) => imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media ${mediaQueries.MAX_TABLET} {
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 1rem;
    width: 45%;
    height: 100%;
  }
`;

const Caption = styled.div`
  width: 100%;
  height: 44px;
  color: ${({ theme }) => theme.colours.primary};
  background-color: ${({ theme }) => theme.colours.transparent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media ${mediaQueries.MAX_TABLET} {
    padding: 1rem 2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const SpotsLeft = styled.span`
  text-transform: uppercase;
  text-align: right;
  flex: 1;
  color: ${({ theme }) => theme.colours.callToAction};
  font-weight: 500;
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
  padding: 0 2rem;

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
  flex: 1;
  font-weight: 500;
  color: ${({ theme }) => theme.colours.secondary};
`;

const Country = styled.span`
  text-transform: uppercase;
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.MAX_MOBILE} {
    width: 55%;
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
        {isNew && <CornerTag backgroundColour='backgroundContrast'>New</CornerTag>}
        <CornerCaptions>
          <Country>{country}</Country>
          <span>{`${tourLength} days`}</span>
        </CornerCaptions>
      </Image>
      <Column>
        <Caption>
          <Departure>{tourDate}</Departure>
          <SpotsLeft>{`${spotsLeft || 'No'} spots left`}</SpotsLeft>
        </Caption>
        {name && <Heading>{name}</Heading>}
      </Column>
    </Container>
  );
};

InternationalTourItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InternationalTourItem;
