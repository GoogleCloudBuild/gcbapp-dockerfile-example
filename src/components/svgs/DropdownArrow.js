import React from 'react';
import PropTypes from 'prop-types';

const DropDownArrow = ({ fill }) => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path d='M7 10l5 5 5-5z' fill={fill} />
    <path d='M0 0h24v24H0z' fill='none' />
  </svg>
);

DropDownArrow.propTypes = {
  fill: PropTypes.string,
};

export default DropDownArrow;
