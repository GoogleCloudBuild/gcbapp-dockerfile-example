import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.span`
  color: red;
`;

const ShortTextField = ({
  data,
  onChange,
  validate,
  value,
  formId,
  errors,
}) => {
  const { name, label, fieldType } = data;

  let type = 'text';
  switch (fieldType) {
    case 'email': type = 'email'; break;
    case 'phone': type = 'tel'; break;
    default:
  }

  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        id={name}
        form={formId}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => validate(data)}
      />
      {errors && <Error>{errors.join(', ')}</Error>}
    </div>
  );
};

ShortTextField.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  value: PropTypes.string,
  formId: PropTypes.string.isRequired,
  errors: PropTypes.array,
};

export default ShortTextField;
