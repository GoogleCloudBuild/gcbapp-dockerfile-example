import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 10px;
`;

const Error = styled.span`
  color: red;
`;

class RadioGroup extends Component {
  componentDidMount() {
    const { data, onChange } = this.props;
    data.options.forEach((option) => {
      if (option.default) {
        const isDefault = true;
        onChange(data.name, option.value, isDefault);
      }
    });
  }

  render() {
    const {
      data,
      formId,
      selectedValue,
      onChange,
      errors,
    } = this.props;
    const { name, options } = data;
    return (
      <div>
        {options.map((option) => (
          <div key={option.contentful_id}>
            <Radio
              name={name}
              id={option.value}
              form={formId}
              checked={selectedValue === option.value}
              onChange={() => onChange(name, option.value)}
            />
            <label htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
        {errors && <Error>{errors.join(', ')}</Error>}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  formId: PropTypes.string,
  selectedValue: PropTypes.string,
  errors: PropTypes.array,
};

export default RadioGroup;
