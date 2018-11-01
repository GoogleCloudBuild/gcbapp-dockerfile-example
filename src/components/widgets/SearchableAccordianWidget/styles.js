import styled from 'styled-components';
import Markdown from '../../typography/Markdown';
import mediaQueries from '../../../styles/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 61rem;
  margin: 0 auto 4.5rem;
  @media ${mediaQueries.MAX_MOBILE} {
    margin-bottom: 0;
  }
`;

export const SearchBar = styled.div`
  height: 4.5rem;
  margin-bottom: 3rem;
  border: solid 1px black;
  background-color: #957392;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordianItemWrapper = styled.div`
  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0 -2rem;
  }
`;

export const AccordianTitle = styled.button.attrs({
  id: (props) => `accordian-title-${props.index}`,
  'aria-expanded': (props) => props.selected,
  'aria-controls': (props) => `accordian-body-${props.index}`,
})`
  height: 4.5rem;
  margin: 0;
  box-shadow: 0 0 7px 0 rgba(109, 109, 109, 0.27);
  padding: 0 3.67rem;
  font-size: 1.6rem;
  color: ${(props) => (props.selected ? props.theme.colours.callToActionHighlight : props.theme.colours.primary)};
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  width: 100%;
  position: relative;
  background-color: white;
  z-index: 1;
  h2 {
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
    white-space: ${(props) => (props.selected ? 'wrap' : 'nowrap')};
    overflow: ${(props) => (props.selected ? 'visible' : 'hidden')};
    text-overflow: ellipsis;
    text-align: left;
    margin: 0 1rem 0 0;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.4rem;
    padding: 0 1.5rem;
  }
`;

export const AccordianExpandIcon = styled.span`
  color: ${(props) => props.theme.colours.callToActionHighlight};
  font-size: 3rem;
  line-height: 2.4rem;
  font-weight: normal;
`;

export const AccordianBody = styled.div.attrs({
  id: (props) => `accordian-body-${props.index}`,
  tabIndex: -1,
})`
  width: 100%;
  margin: 0;
  background-color: ${(props) => props.theme.colours.background};
  max-height: ${(props) => (props.isOpen ? '120rem' : 0)};
  position: relative;
  transition: max-height 0.5s ease-out;
  overflow-y: auto;
  @media ${mediaQueries.MAX_TABLET} {
    transition-duration: 0s;
    max-height: none;
    height: ${(props) => (props.isOpen ? 'fit-content' : 0)};
  }
`;

export const Content = styled.div`
  width: 100%;
  border-bottom: solid 4px #e6e9f2;
  padding: 2.5rem 3.5rem;
  color: #6e6e6e;
  font-size: 1.4rem;
  line-height: 2rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  max-height: ${(props) => (props.isOpen ? '80rem' : 0)};
  transition: all 0.3s ease-out;
  :last-child {
    border: none;
  }
  @media ${mediaQueries.MAX_TABLET} {
    transition-duration: 0s;
    max-height: none;
    height: ${(props) => (props.isOpen ? 'fit-content' : 0)};
    opacity: 1;
  }
  @media ${mediaQueries.MAX_MOBILE} {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;

export const ContentHeading = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 1.4rem;
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.2rem;
  }
`;

export const ContentBody = Markdown.extend`
  color: inherit;
  h3 {
    font-size: 1.4rem;
    @media ${mediaQueries.MAX_MOBILE} {
      font-size: 1.2rem
    }
  }
`;
