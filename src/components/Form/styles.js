import styled, { css } from 'styled-components';
import { SectionHeading, SectionSubHeading, Markdown } from '../typography';
import { PrimaryFilledButton, CallToActionFilledButton } from '../buttons';

export const FormStep = styled.div`
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

export const SuccessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormProgressWrapper = styled.div`
  margin: 1rem auto;
`;

export const Heading = SectionHeading.extend`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const SubHeading = SectionSubHeading.extend`
  margin-top: 0;
`;

export const MarkdownContainer = Markdown.extend`
  display: ${(props) => (props.display ? 'block' : 'none')};
  margin-top: 0;
  max-width: 400px;
  > ul {
    list-style: none;
    > li {
      clear: left;
    }
    > li:before {
      content: '';
      height: 1rem;
      width: 1rem;
      display: block;
      float: left;
      margin-left: -1.5em;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url(
        'https://images.ctfassets.net/wqz0jxyfamgk/17oHuhoi0SsyYQWekAyasc/186212894ccddc64ea3ea2162ef1d369/Check.svg'
      );
    }
  }
`;

export const FieldSet = styled.fieldset`
  margin: 1rem 0;
`;

export const ClickToExpandText = styled.span`
  color: ${(props) => props.theme.colours.callToActionHighlight};
  text-decoration: underline;
  cursor: pointer;
`;

export const chevronCss = css`
  color: ${(props) => props.theme.colours.callToActionHighlight};
  text-decoration: none !important;
  margin-left: 10px !important;
  font-size: 24px !important;
  vertical-align: middle;
`;

export const ChevronUp = styled.i.attrs({
  className: 'zmdi zmdi-chevron-up',
})`${chevronCss}`;

export const ChevronDown = styled.i.attrs({
  className: 'zmdi zmdi-chevron-down',
})`${chevronCss}`;

export const BackButton = PrimaryFilledButton.extend`
  margin: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const NextButton = PrimaryFilledButton.extend`
  margin: 0;
`;

export const SubmitButton = CallToActionFilledButton.extend.attrs({
  type: 'submit',
})`
  margin: 0;
`;

export const Error = styled.span`
  color: red;
`;

export const FormError = Error.withComponent('div').extend`
  margin: 1rem;
  text-align: center;
`;
