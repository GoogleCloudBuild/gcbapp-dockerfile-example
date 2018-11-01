import styled from 'styled-components';
import { subHeadingStyle } from '../../styles/typography';

const PageSecondarySubHeading = styled.p`
  ${subHeadingStyle}
  font-weight: 700;
  text-transform: uppercase;
  line-height: 42px;
  color: ${(props) => props.theme.colours.contrast};
  font-size: 14px;
`;

export default PageSecondarySubHeading;
