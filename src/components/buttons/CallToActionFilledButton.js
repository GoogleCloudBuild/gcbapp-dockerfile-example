import ButtonBase from './ButtonBase';

const CallToActionFilledButton = ButtonBase.extend`
  background: ${(props) => props.theme.colours.callToAction};
  color: ${(props) => props.theme.colours.contrast} !important;
  letter-spacing: 2px;
  font-weight: bold;
`;

export default CallToActionFilledButton;
