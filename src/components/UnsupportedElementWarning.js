import styled from 'styled-components';
import PropTypes from 'prop-types';

const buildWarningMessage = ({
  unsupported,
  id,
  contentTheme,
  index,
  parent,
}) => {
  const withId = id ? `with id ${id}` : '';
  const atIndex = index === undefined ? '' : `at index ${index}`;
  const theme = contentTheme ? `the ${contentTheme} theme` : 'this theme';
  const ofParent = parent ? `of ${parent}` : '';
  return `Warning: ${unsupported} ${withId} ${atIndex} is not supported in ${theme} ${ofParent}`;
};

const UnsupportedElementWarning = styled.textarea.attrs({
  value: buildWarningMessage,
  cols: 40,
  rows: 3,
  readOnly: true,
})`
  color: red;
  background: white;
  font-size: 0.8vw;
  font-weight: bold;
  border: solid red;
  padding: 5px;
  display: ${(props) => (props.theme.unsupportedElementWarning ? 'block' : 'none')};
`;

UnsupportedElementWarning.defaultProps = {
  unsupported: 'This content/element',
};

UnsupportedElementWarning.propTypes = {
  unsupported: PropTypes.string.isRequired, // The name of the element that isn't supported
  id: PropTypes.string, // A contentful id if available
  contentTheme: PropTypes.string, // The theme of the parent element
  index: PropTypes.number, // If the element is part of an array, the index at which it appears
  parent: PropTypes.string, // The name of the parent element if available
};

export default UnsupportedElementWarning;
