import ButtonBase from './ButtonBase';

const PrimaryFilledButton = ButtonBase.extend`
  background: ${(props) => props.theme.colours.primary};
  color: ${(props) => props.theme.colours.contrast} !important;
`;

export default PrimaryFilledButton;
