import styled from 'styled-components';
import { headingStyle } from '../../styles/typography';

const Statistic = styled.p`
  ${headingStyle}
  color: ${(props) => props.theme.colours.callToActionHighlight};
`;

export default Statistic;
