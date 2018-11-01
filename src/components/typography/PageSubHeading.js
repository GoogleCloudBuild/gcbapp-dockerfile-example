import styled from 'styled-components';
import { subHeadingStyle } from '../../styles/typography';

const PageSubHeading = styled.p`
  ${subHeadingStyle}
  max-width: 650px;
  color: ${(props) => props.theme.colours.contrast};
`;

export default PageSubHeading;
