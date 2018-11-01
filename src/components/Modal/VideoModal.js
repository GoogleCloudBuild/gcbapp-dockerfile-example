import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import mediaQueries from '../../styles/mediaQueries';
import xIcon from '../../images/svgIcons/X_Icon.svg';
import { spaceToUnderscore } from '../../utils/helpers';

const ModalArea = styled.div`
  background: transparent;
`;

const VideoPlayer = styled.video`
  width: 95vw;
  height: auto;

  @media ${mediaQueries.MIN_TABLET} {
    width: 90vw;
  }

  @media ${mediaQueries.MIN_DESKTOP} {
    width: 80vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
`;

ReactModal.setAppElement('#___gatsby');

const modalStyles = {
  overlay: {
    zIndex: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px',
  },
  content: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    background: 'black',
    overflow: 'none',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: 0,
  },
};

class VideoModal extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const {
      modalController: ModalController,
      link,
    } = this.props;
    return (
      <div>
        <ModalController
          id={spaceToUnderscore(link.title).toLowerCase()}
          onClick={() => this.setState({ isOpen: true })}
        >
          {link.displayText}
        </ModalController>
        <ReactModal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.setState({ isOpen: false })}
          style={modalStyles}
          {...this.props}
        >
          <ModalArea>
            <VideoPlayer
              controls
              autoplay
              src={link.video.file.url}
            />
            <CloseButton
              id='close_video_modal_button'
              onClick={() => this.setState({ isOpen: false })}
            >
              <img alt='Close Modal' src={xIcon} />
            </CloseButton>
          </ModalArea>
        </ReactModal>
      </div>
    );
  }
}

VideoModal.propTypes = {
  link: PropTypes.object.isRequired,
  modalController: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

export default VideoModal;
