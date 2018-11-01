import styled from 'styled-components';
import colours from './colours';

const theme = {
  fontFamily: 'Montserrat, sans-serif',
  colours: {
    primary: colours.navy,
    primaryHighlight: colours.lightNavy,
    primaryLowlight: colours.blue,
    secondary: colours.grey,
    background: colours.whisper,
    backgroundContrast: colours.wine,
    callToAction: colours.red,
    callToActionHighlight: colours.pink,
    callToActionLowlight: colours.darkRed,
    contrast: colours.white,
    contrastLowlight: colours.halfGrey,
    disabled: colours.stone,
    nav: {
      background: colours.white,
      border: colours.mischka,
      text: colours.stormGrey,
      divider: colours.alto,
    },
  },
  sizes: {
    maxWidth: '1080px',
  },
  responsive: {
    mobileMaxWidth: '504px', /* Blackberry Passport */
    tabletMaxWidth: '800px', /* Samsung Nexus 9 */
    tabletLgMaxWidth: '1024px', /* iPad Pro / MS Surface Pro */
  },
  zIndex: {
    hamburger: 21,
  },
  defaults : {
    sectionAngle: 3,
  },
  unsupportedElementWarning: false,
};

export const BaseContainer = styled.div`
  max-width: 119rem !important;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const BaseHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  align-self: flex-start;
  max-width: 720px;
  padding: 2rem 0;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: ${theme.responsive.mobile}) {
    padding: 1rem 0;
    font-size: 22px;
    line-height: 24px;
  }
`;

export const BaseText = styled.div`
  line-height: 22px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: ${theme.colours.secondary};
  font-weight: lighter;
  @media screen and (max-width: ${theme.responsive.mobile}) {
    font-size: 12px;
  }
`;

export const BaseMenu = styled.div`
    color: ${theme.colours.nav.text};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.03125rem;
    a {
      font-weight: inherit;
      color: inherit;
    }
`;

export default theme;
