import React from 'react';
import PropTypes from 'prop-types';

import {
  AccordianItemWrapper,
  AccordianTitle,
  AccordianExpandIcon,
  AccordianBody,
} from './styles';

const AccordianItem = (props) => {
  const {
    toggleAccordian,
    isOpen,
    index,
    title,
    children,
  } = props;

  return (
    <AccordianItemWrapper>
      <AccordianTitle
        selected={isOpen}
        index={index}
        onClick={() => toggleAccordian(index)}
      >
        <h2>{title}</h2>
        <AccordianExpandIcon>{isOpen ? '-' : '+'}</AccordianExpandIcon>
      </AccordianTitle>

      {children && (
        <AccordianBody index={index} isOpen={isOpen}>
          {children}
        </AccordianBody>
      )}
    </AccordianItemWrapper>
  );
};

AccordianItem.propTypes = {
  toggleAccordian: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AccordianItem;
