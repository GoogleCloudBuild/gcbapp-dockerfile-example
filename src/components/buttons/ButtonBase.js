import styled from 'styled-components';

const ButtonBase = styled.button.attrs({
  type: 'button',
})`
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  text-transform: uppercase !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  height: 3.4rem;
  width: fit-content;
  border-radius: 1.9rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.2rem !important;
  padding: 0.9rem 2.8rem;
  text-decoration: none !important;
  font-weight: 500;
  border: none;
  margin: 1rem auto;
  outline: none;
  flex-shrink: 0;
  letter-spacing: 0.22rem;
  background-color: ${({ disabled, theme }) => (disabled ? `${theme.colours.disabled} !important` : 'inherit')};
  &:hover {
    filter: ${({ disabled }) => (disabled ? 'none' : 'brightness(1.1)')};
  }
  &:active {
    filter: ${({ disabled }) => (disabled ? 'none' : 'brightness(0.9)')};
  }
`;

export default ButtonBase;
