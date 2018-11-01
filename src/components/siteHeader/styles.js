import styled from 'styled-components';
import Link from '../Link';

const StickyContainer = styled.div`
  position: ${(props) => (props.isOpen ? 'relative' : 'fixed')};
  margin-bottom: ${(props) => (props.isOpen ? '-6.9rem' : 0)};
  background-color: white;
  width: 100%;
  height: auto;
  z-index: 19;
  display: flex;
  top: 0;
  overflow: visible;
  flex-direction: column;
  border-bottom: ${(props) => `1.5px solid ${props.theme.colours.nav.border}`}
`;

export const ShowInTabletContainer = styled.div`
  display: none;
  @media screen and (max-width: 1300px) {
    display: block;
  }
`;

export const ShowInDesktopContainer = styled.div`
  display: contents;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const MobileStickyContainer = StickyContainer.extend`
  display: none;
  @media screen and (max-width: 970px) {
    display: flex;
  }
`;

export const DesktopStickyContainer = StickyContainer.extend`
  display: flex;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  max-width: 110rem;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex: 1 1;
  justify-content: center;
`;

export const HeaderButtonContainer = styled.div`
  height: 6.9rem;
  display: flex;
  align-items: center;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 6.9rem;
`;

export const Hamburger = styled.div`
  display: flex;
  padding: 1.8rem 1.4rem;
  align-items: center;
  z-index: ${(props) => props.theme.zIndex.hamburger};
`;

export const ContactLink = styled(Link)`
  padding: 1.3em 1.1rem;
  img {
    vertical-align: middle;
  }
`;

export const Logo = styled(Link)`
  margin: 1.3rem 1.5rem 1.25rem 0;

  @media screen and (max-width: 970px) {
    margin: 1rem;
    flex-grow: 1;
  }
`;
