import styled from 'styled-components';
import { headingStyle } from '../../styles/typography';

const PageHeading = styled.h1`
  ${headingStyle}
  color: ${(props) => props.theme.colours.contrast};
`;

export default PageHeading;
