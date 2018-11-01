import styled from 'styled-components';
import Link from '../../Link';
import mediaQueries from '../../../styles/mediaQueries';

import CheckboxSelected from '../../../images/svgIcons/Checkbox_ON.svg';
import CheckboxUnselected from '../../../images/svgIcons/Checkbox_OFF.svg';
import RadioSelected from '../../../images/svgIcons/Radiobutton_ON.svg';
import RadioUnselected from '../../../images/svgIcons/RadioButton_OFF.svg';

const ROW_HEIGHT = 7.3;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 8.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media ${mediaQueries.MAX_TABLET} {
    padding: 0;
  }
`;

export const ChoiceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media ${mediaQueries.MAX_MOBILE} {
    flex-direction: column;
  }
`;

export const ChoiceColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChoiceCard = styled.div`
  flex: 1;
  margin: 0.8rem;
  background-color: white;
  box-shadow: 0 3px 7px 0 rgba(125, 124, 124, 0.5);

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0.4rem 0;
  }
`;

export const ChoiceCardHeading = styled.div`
  height: ${ROW_HEIGHT}rem;
  flex: 1;
  padding: 0 3.8rem;
  color: ${({ theme }) => theme.colours.contrast};
  background-color: ${({ theme }) => theme.colours.primary};
  font-weight: 600;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};

  @media ${mediaQueries.MAX_TABLET} {
    padding: 0 2rem;
    font-size: 1.6rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.5rem;
  }
`;

export const ChoiceCardOption = styled.div`
  height: ${ROW_HEIGHT}rem;
  padding: 0 3.8rem;
  color: ${({ theme }) => theme.colours.primary};
  background-color: ${({ theme, selected }) => (selected ? theme.colours.background : theme.colours.contrast)};
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily};
  cursor: pointer;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    font-size: 1.6rem;
    padding: 0 2.5rem;
  }

  @media ${mediaQueries.MAX_TABLET} {
    padding: 0 2rem;
    font-size: 1.5rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 1.4rem;
  }
`;

export const Radio = styled.img.attrs({
  src: ({ selected }) => (selected ? RadioSelected : RadioUnselected),
})`
  margin-right: 1.2rem;
`;

export const Checkbox = styled.img.attrs({
  src: ({ selected }) => (selected ? CheckboxSelected : CheckboxUnselected),
  alt: ({ selected }) => (selected ? 'Selected checkbox' : 'Unselected checkbox'),
})`
  margin-right: 2.4rem;

  @media ${mediaQueries.MAX_TABLET} {
    margin-right: 1.2rem;
  }
`;

export const Variant = styled.span`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  color: ${({ theme, selected }) => (selected ? theme.colours.primary : '#b1b1b1')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

export const SummaryContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colours.primary};
  margin: 0.8rem;
  box-shadow: 0 3px 7px 0 rgba(125, 124, 124, 0.5);

  @media ${mediaQueries.MAX_TABLET} {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0.4rem 0 0.8rem;
    padding-bottom: 2rem;
  }
`;

export const Summary = styled.div`
  height: ${ROW_HEIGHT}rem;
  color: ${({ theme }) => theme.colours.contrast};
  padding: 0 2rem 0 3.8rem;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: bold;

  @media ${mediaQueries.MAX_MOBILE} {
    padding: 0 2rem;
    font-size: 1.5rem;
  }
`;

export const CheckoutButton = styled(Link)`
  margin: 0;

  @media ${mediaQueries.MAX_MOBILE} {
    margin: 0 auto;
  }
`;

export const PriceBreakdown = styled.div`
  border-top: ${({ numberOfItems }) => (numberOfItems ? 'solid 3px #1b1e38' : 'none')};
  padding: ${({ numberOfItems }) => (numberOfItems ? '2rem' : 0)} 2rem 0 3.8rem;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colours.contrast};
  transition: height 0.2s linear;
  height: ${({ numberOfItems }) => `${numberOfItems * 3.4}rem`};
  > div {
    margin-bottom: 2rem;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    padding: ${({ numberOfItems }) => (numberOfItems ? '2rem' : 0)} 2rem 0;
  }
`;

export const ButtonColumn = styled.span`
  width: 25%;
  display: flex;
  justify-content: flex-end;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    width: 35%;
  }

  @media ${mediaQueries.MAX_TABLET} {
    width: 40%;
  }
`;

export const LineItem = styled.div`
  flex: 1;
  display: flex;
`;

export const PriceLine = styled.span`
  text-align: right;
  flex: 1;
`;

export const Total = styled.span`
  text-align: right;
  flex: 7;

  @media ${mediaQueries.MAX_TABLET_LANDSCAPE} {
    flex: 5;
  }

  @media ${mediaQueries.MAX_TABLET} {
    flex: 4;
  }

  @media ${mediaQueries.MAX_MOBILE} {
    display: none;
  }
`;
