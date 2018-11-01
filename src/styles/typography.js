import { css } from 'styled-components';

import mediaQueries from './mediaQueries';
import theme from './theme';

export const headingStyle = css`
  text-align: center;
  color: ${theme.colours.primary};
  font-size: 3rem;
  font-weight: 700;
  @media ${mediaQueries.MAX_MOBILE} {
    font-size: 20px;
    max-width: 300px;
  }
`;

export const subHeadingStyle = css`
  text-align: center;
  color: ${theme.colours.primary};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const bodyStyle = css`
  color: ${theme.colours.secondary};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
`;
