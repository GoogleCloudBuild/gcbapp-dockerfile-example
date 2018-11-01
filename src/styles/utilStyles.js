import { css } from 'styled-components';

export const getOffset = ({ offset = 0, marginTop = 0 }) => css`
  margin-top: ${offset ? `${offset + marginTop}px` : `${marginTop}px`};
`;

export const getBackgroundColour = ({
  theme, backgroundColor = 'transparent', backgroundColour = 'transparent',
}) => css`
  background-color: ${theme.colours[backgroundColor || backgroundColour] || backgroundColor || backgroundColour};
`;

export const getZIndex = ({ zIndex }) => css`
  z-index: ${zIndex || 'auto'};
`;

export const getPadding = ({
  paddingTop = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
}) => {
  const cssPaddingTop = paddingTop ? css`padding-top: ${paddingTop}px;` : '';
  const cssPaddingBottom = paddingBottom ? css`padding-bottom: ${paddingBottom}px;` : '';
  const cssPaddingLeft = paddingLeft ? css`padding-left: ${paddingLeft}px;` : '';
  const cssPaddingRight = paddingRight ? css`padding-right: ${paddingRight}px;` : '';
  return css`
    ${cssPaddingTop}
    ${cssPaddingBottom}
    ${cssPaddingLeft}
    ${cssPaddingRight}
  `;
};

export const getMargin = ({
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  const cssMarginTop = marginTop ? css`margin-top: ${marginTop}px;` : '';
  const cssMarginBottom = marginBottom ? css`margin-bottom: ${marginBottom}px;` : '';
  const cssMarginLeft = marginLeft ? css`margin-left: ${marginLeft}px;` : '';
  const cssMarginRight = marginRight ? css`margin-right: ${marginRight}px;` : '';
  return css`
    ${cssMarginTop}
    ${cssMarginBottom}
    ${cssMarginLeft}
    ${cssMarginRight}
  `;
};

const calculateAngleHeight = (degrees, width) => {
  const radians = degrees * Math.PI / 180;
  return Math.floor(width * Math.tan(radians));
};

export const clipSectionAngles = ({
  degrees = 3,
  paddingTop = 0,
  paddingBottom = 0,
  width,
  top = true,
  bottom = true,
}) => {
  const angleHeight = calculateAngleHeight(degrees, width);
  if (top && !bottom) {
    return css`
      clip-path: polygon(
        0 ${angleHeight}px,
        100% 0,
        100% 100%,
        0% 100%
      );
      padding-top: ${angleHeight + paddingTop}px;
    `;
  }
  if (!top && bottom) {
    return css`
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - ${angleHeight}px),
        0% 100%
      );
      padding-bottom: ${angleHeight + paddingBottom}px;
    `;
  }
  return css`
    clip-path: polygon(
      0 ${angleHeight}px,
      100% 0,
      100% calc(100% - ${angleHeight}px),
      0% 100%
    );
    padding-top: ${angleHeight + paddingTop}px;
    padding-bottom: ${angleHeight + paddingBottom}px;
  `;
};

export const clipInverseSectionAngles = ({
  degrees = 3,
  paddingTop = 0,
  paddingBottom = 0,
  width,
}) => {
  const angleHeight = calculateAngleHeight(degrees, width);
  return css`
    clip-path: polygon(
      0 0,
      100% ${angleHeight}px,
      100% 100%,
      0 calc(100% - ${angleHeight}px)
    );
    padding-top: ${angleHeight + paddingTop}px;
    padding-bottom: ${angleHeight + paddingBottom}px;
  `;
};
