import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import phone from '../../images/svgIcons/Phone.svg';

import mediaQueries from '../../styles/mediaQueries';

const CallButton = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1.3em 1.1rem;
  white-space: nowrap;
  text-decoration: none;
`;

const Phone = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  color: ${(props) => props.theme.colours.primary};
  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

const CallIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  path {
    fill: ${(props) => props.theme.colours.callToActionHighlight} !important;
  }
  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    width: 2rem;
    height: 2rem;
    path {
      fill: ${(props) => props.theme.colours.callToAction} !important;
    }
  }
`;

const CallUs = ({ phoneNumber }) => {
  if (!phoneNumber) {
    return null; // medview site doesnt have a phone in contentful
  }
  return (
    <CallButton id='call_us' href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
      <CallIcon alt='call icon' src={phone} />
      <Phone>{phoneNumber}</Phone>
    </CallButton>
  );
};

CallUs.propTypes = {
  phoneNumber: PropTypes.string,
};

export default CallUs;
