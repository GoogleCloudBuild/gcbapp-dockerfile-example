import styled from 'styled-components';
import mediaQueries from '../../styles/mediaQueries';

const ITEM_HEIGHTS = '1.6rem';

export const Switcher = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
  color: ${(props) => props.theme.colours.primary};
  font-family: ${(props) => props.theme.fontFamily};
  background: none;
  border: none;
  cursor: pointer;

  @media ${mediaQueries.MAX_MOBILE} {
    margin-left: 2.3rem;
    margin-bottom: 2rem;
  }
`;

export const SelectedCountry = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const DropdownContainer = styled.div`
  position: ${(props) => (props.deviceMode ? 'relative' : 'fixed')};
  top: ${(props) => (props.deviceMode ? 0 : '6.9rem')};
  left: 0;
  width: 100vw;
  background-color: #EEF0F7;
  padding: 2.9rem 4.5rem;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 2rem 0 2rem 3rem;
  }
`;

export const LocaleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LocaleSubLists = styled.div`
  display: flex;
  flex-direction: row;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: column;
  }
`;

export const LocaleLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LocaleListHeading = styled.h3`
  color: ${(props) => props.theme.colours.primary};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0;
`;

export const LocaleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: fit-content;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-wrap: nowrap;
    height: auto;
    margin: 0;
  }
`;

export const LocaleListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 5.5rem;
  color: ${(props) => (props.selected
    ? props.theme.colours.callToActionHighlight
    : props.theme.colours.primary)};
  font-size: 1.52rem;
  position: relative;

  @media ${mediaQueries.MAX_TABLET} {
    font-size: 1.22rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    align-items: flex-start;
    margin-right: 0;
  }
`;

export const SelectedLocaleIndicator = styled.img.attrs({
  src: 'https://images.ctfassets.net/tcuhs00ixsl3/6vnI4j4Ouki8mUKyasYG0u/f639132023d053c30f346ea94ddc6a4a/world_pink.svg', // eslint-disable-line
})`
  position: absolute;
  left: -3rem;
  height: 1.8rem;

  @media ${mediaQueries.MAX_MOBILE} {
    height: 1.5rem;
    left: -2.5rem;
  }
`;

export const Flag = styled.img`
  height: ${ITEM_HEIGHTS};
  margin-right: 1.6rem;

  @media ${mediaQueries.MAX_MOBILE} {
    margin-right: 1rem;
  }
`;

export const Dash = styled.span`
  height: ${ITEM_HEIGHTS};
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;

export const Slash = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  @media ${mediaQueries.MAX_MOBILE} {
    display: ${(props) => (props.multiline ? 'none' : 'inline')};
  }
`;

export const Language = styled.span`
  height: ${ITEM_HEIGHTS};
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  @media ${mediaQueries.MAX_MOBILE} {
    margin-bottom: ${(props) => (props.multiline ? '1rem' : 0)};
  :last-of-type {
    margin-bottom: 0;
    
  }
`;

export const ChangeLocale =  styled.a.attrs({
  tabIndex: (props) => (props.isOpen ? 0 : -1),
})`
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  font-weight: ${(props) => (props.selected ? 600 : 'normal')};
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

export const Country = styled(ChangeLocale)`
  height: ${ITEM_HEIGHTS};
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Languages = styled.div`
  display: flex;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: ${(props) => (props.multiline ? 'column' : 'row')};
  }
`;
