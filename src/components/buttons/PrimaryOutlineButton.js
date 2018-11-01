import ButtonBase from './ButtonBase';

const PrimaryOutlineButton = ButtonBase.extend`
  background: transparent;
  color: ${(props) => props.theme.colours.primary} !important;
  border: 2px solid ${(props) => props.theme.colours.primary};
  font-weight: 700;
`;

export default PrimaryOutlineButton;
