import styled from 'styled-components';
import DefaultSlideDot from '../../images/svgIcons/Default_Slide.svg';
import SelectedSlideDot from '../../images/svgIcons/Selected_Slide.svg';
import Arrow from '../../images/svgIcons/Arrow.svg';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0;
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;

export const Indicators = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
`;

export const IndicatorDot = styled.img.attrs({
  src: ({ selected }) => (selected ? SelectedSlideDot : DefaultSlideDot),
  alt: ({ selected }) => (selected ? 'Selected slide dot' : 'Slide dot'),
})`
  margin: 0.5rem;
  cursor: pointer;
`;

export const LeftArrow = styled.img.attrs({
  src: Arrow,
  alt: 'Previous',
  title: 'Previous slide',
})`
  transform: rotate(180deg);
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 5;
`;

export const RightArrow = styled.img.attrs({
  src: Arrow,
  alt: 'Next',
  title: 'Next slide',
})`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 40%;
  z-index: 5;
`;
