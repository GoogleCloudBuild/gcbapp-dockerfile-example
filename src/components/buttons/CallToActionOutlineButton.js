import ButtonBase from './ButtonBase';

const CallToActionOutlineButton = ButtonBase.extend`
  background: transparent;
  color: ${(props) => props.theme.colours.callToAction} !important;
  border: 2px solid ${(props) => props.theme.colours.callToAction};
  font-weight: 700;
`;

export default CallToActionOutlineButton;
