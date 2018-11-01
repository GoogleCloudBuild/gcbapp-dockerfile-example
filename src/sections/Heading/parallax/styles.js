import styled from 'styled-components';
import { PageHeading, PageSubHeading } from '../../../components/typography';

export const ParallaxContent = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 120px;
  background-color: rgba(0,0,0,0.2);
`;

export const Heading = PageHeading.extend`
  text-align: center;
  color: ${(props) => props.theme.colours.contrast};
  font-size: 30px;
  font-weight: 700;
  margin-top: 4rem;
`;

export const SubHeading = PageSubHeading.extend`
  margin: 0;
`;
