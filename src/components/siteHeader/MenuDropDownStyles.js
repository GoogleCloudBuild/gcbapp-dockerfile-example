import styled from 'styled-components';

import mediaQueries from '../../styles/mediaQueries';

export const MenuGrid = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  background: white;
  margin-top: 1.125rem;
  padding-bottom: 1.125rem;
  border-bottom: ${(props) => `1.5px solid ${props.theme.colours.nav.border}`};
  display: flex;
  justify-content: center;
  animation-duration: 0.4s;
  animation-duration: 0.4s;
  z-index: -1000;
`;


export const MenuColumn = styled.div`
  padding: 0 1.2rem;
`;


export const NavWidth = styled.div`
  max-width: 105.6rem;
  display: flex;
  flex-direction: row;
`;

export const MenuList = styled.div`
  animation-duration: 0.4s;
  animation-duration: 0.4s;
`;

export const MenuDropdownContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-left: 1.8rem;
  margin-right: 1.8rem;

  @media ${mediaQueries.MAX_TABLET} {
    max-width: none;
  }
`;
