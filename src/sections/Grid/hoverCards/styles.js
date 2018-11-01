import styled from 'styled-components';
import { SectionHeading, SectionDescription } from '../../../components/typography';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

export const Heading = SectionHeading.extend`
  margin-bottom: 0;
  max-width: 500px;
`;

export const Description = SectionDescription.extend`
  margin-top: 1rem;
  max-width: 500px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  flex: 1;
  margin-top: 3rem;
`;
