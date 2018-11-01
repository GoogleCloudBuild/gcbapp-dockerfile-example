import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RRMarkdown from 'react-remarkable';
import { bodyStyle } from '../../styles/typography';
import Plus from '../../images/svgIcons/Plus.svg';

const WrapperMarkdown = ({ className, ...props }) => (
  <div className={className}>
    <RRMarkdown {...props} options={{ breaks: true }} />
  </div>
);

WrapperMarkdown.propTypes = {
  className: PropTypes.string,
};

const Markdown = styled(WrapperMarkdown)`
  ${bodyStyle}
  color: ${(props) => props.theme.colours.primary};
  font-weight: normal;
  font-size: inherit;
  p {
    margin-top: 0;
    color: inherit;
  }
  a {
    font-weight: bold;
    color: ${(props) => props.theme.colours.callToActionHighlight};
    :active {
      color: ${(props) => props.theme.colours.callToAction};
    }
  }
  ul {
    position: relative;
    list-style: none;
    padding-left: 1.5em;
    li:before {
      position: absolute;
      left: 0;
      content: '';
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
      height: 1em;
      width: 1em;
      margin-top: 0.2em;
      background-image: url(${({ bullet }) => (bullet || Plus)});
    }
  }
  h1 {
    font-size: 2.4rem
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  strong {
    font-weight: 600;
  }
`;

export default Markdown;
