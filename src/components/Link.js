import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';

import ComponentSwitch from '../utils/ComponentSwitch';
import { getPathForPage, addLocaleToPath } from '../utils/helpers';
import { VideoModal } from './Modal';

import {
  CallToActionFilledButton,
  CallToActionOutlineButton,
  PrimaryFilledButton,
  PrimaryOutlineButton,
  buttonThemes,
} from './buttons';

const internalLinkButtons = {
  [buttonThemes.CALL_TO_ACTION_FILLED]: CallToActionFilledButton.withComponent('a'),
  [buttonThemes.CALL_TO_ACTION_OUTLINE]: CallToActionOutlineButton.withComponent('a'),
  [buttonThemes.PRIMARY_FILLED]: PrimaryFilledButton.withComponent('a'),
  [buttonThemes.PRIMARY_OUTLINE]: PrimaryOutlineButton.withComponent('a'),
};

const externalLinkButtons = {
  [buttonThemes.CALL_TO_ACTION_FILLED]: CallToActionFilledButton.withComponent('a'),
  [buttonThemes.CALL_TO_ACTION_OUTLINE]: CallToActionOutlineButton.withComponent('a'),
  [buttonThemes.PRIMARY_FILLED]: PrimaryFilledButton.withComponent('a'),
  [buttonThemes.PRIMARY_OUTLINE]: PrimaryOutlineButton.withComponent('a'),
};

const actionButtons = {
  [buttonThemes.CALL_TO_ACTION_FILLED]: CallToActionFilledButton.withComponent('button'),
  [buttonThemes.CALL_TO_ACTION_OUTLINE]: CallToActionOutlineButton.withComponent('button'),
  [buttonThemes.PRIMARY_FILLED]: PrimaryFilledButton.withComponent('button'),
  [buttonThemes.PRIMARY_OUTLINE]: PrimaryOutlineButton.withComponent('button'),
};

const Anchor = styled.a`position: relative;`;
const Div = styled.div`position: relative;`;
const Image = styled.img`flex: 1;`;

class Link extends Component {
  constructor(props) {
    super(props);

    const {
      theme: {
        currentLocale: locale,
      },
    } = props;

    const createLinkComponent = ({ component: LinkComponent, linkProps, content }) => (
      <LinkComponent {...linkProps}>{content}</LinkComponent>);

    this.linkTypeSwitcher = new ComponentSwitch({
      cases: {
        ContentfulLinkInternal: (link, { children, ...others }) => createLinkComponent({
          component: (link.theme && link.theme !== buttonThemes.IMAGE)
            ? internalLinkButtons[link.theme]
            : Anchor,
          linkProps: {
            href: addLocaleToPath(getPathForPage(link.page), locale.slug),
            title: link.text,
            target: link.openLinkInNewTab ? '_blank' : '_self',
            ...others,
          },
          content: children
            || (link.image && <Image src={link.image.file.url} alt={link.image.description} />)
            || link.text,
        }),

        ContentfulLinkExternal: (link, { children, ...others }) => createLinkComponent({
          component: (link.theme && link.theme !== buttonThemes.IMAGE)
            ? externalLinkButtons[link.theme]
            : Anchor,
          linkProps: {
            href: link.url && link.url.replace('<locale>', locale.slug),
            title: link.text,
            target: link.openLinkInNewTab ? '_blank' : '_self',
            ...others,
          },
          content: children
            || (link.image && <Image src={link.image.file.url} alt={link.image.description} />)
            || link.text,
        }),

        ContentfulLinkVideoModal: (link, { ...others }) => (
          <VideoModal
            modalController={(link.theme && link.theme !== buttonThemes.IMAGE)
              ? actionButtons[link.theme]
              : Div}
            {...others}
            link={link}
          />
        ),
      },
    });
  }

  render() {
    const { data, children, ...others } = this.props;

    return this.linkTypeSwitcher.switch(data, { children, ...others });
  }
}

export const internalLinkQuery = graphql`
  fragment InternalLinkFragment on ContentfulLinkInternal {
    __typename
    contentful_id
    text
    theme
    page {
      ...ParentPageFragment
    }
    openLinkInNewTab
    image {
      ...AssetFragment
    }
    internal {
      type
    }
  }
`;

export const externalLinkQuery = graphql`
  fragment ExternalLinkFragment on ContentfulLinkExternal {
    __typename
    contentful_id
    text
    theme
    url
    openLinkInNewTab
    image {
      ...AssetFragment
    }
    internal {
      type
    }
  }
`;

export const videoModalLinkQuery = graphql`
  fragment VideoModalLinkFragment on ContentfulLinkVideoModal {
    title
    __typename
    contentful_id
    displayText
    video {
      ...AssetFragment
    }
    image {
      ...AssetFragment
    }
    theme
    internal {
      type
    }
  }
`;

Link.defaultProps = {
  data: {
    internal: {
      type: 'ContentfulLinkExternal',
    },
  },
};

Link.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Link);
