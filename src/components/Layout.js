import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import config from '../utils/siteConfig';
import basicTheme from '../styles/theme';
import Footer from './siteFooter';
import SiteHeader from './siteHeader';

import favicon from '../images/favicons/favicon.ico';
import favicon16 from '../images/favicons/favicon-16x16.png';
import favicon32 from '../images/favicons/favicon-32x32.png';
import faviconApple from '../images/favicons/apple-touch-icon.png';
import faviconApple57 from '../images/favicons/apple-touch-icon-57x57.png';
import faviconApple60 from '../images/favicons/apple-touch-icon-60x60.png';
import faviconApple72 from '../images/favicons/apple-touch-icon-72x72.png';
import faviconApple76 from '../images/favicons/apple-touch-icon-76x76.png';
import faviconApple114 from '../images/favicons/apple-touch-icon-114x114.png';
import faviconApple120 from '../images/favicons/apple-touch-icon-120x120.png';
import faviconApple144 from '../images/favicons/apple-touch-icon-144x144.png';
import faviconApple152 from '../images/favicons/apple-touch-icon-152x152.png';
import faviconApple180 from '../images/favicons/apple-touch-icon-180x180.png';
import faviconSafariPinned from '../images/favicons/safari-pinned-tab.svg';

const FooterSection = styled.div`
  width: 100%;
`;

const PreviewTag = styled.div`
  height: 20px;
  width: 100px;
  background-color: #FF6347;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9000;
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const previewTheme = Object.assign({}, basicTheme, { unsupportedElementWarning: true });
const nonPreviewTheme = Object.assign({}, basicTheme);

const Layout = (props) => {
  const {
    header,
    footer,
    office,
    children,
    isPreview,
    locales,
    currentLocale,
  } = props;

  const theme = isPreview ? previewTheme : nonPreviewTheme;

  const localisedPreviewTheme = Object.assign({}, theme, {
    locales,
    currentLocale,
  });

  return (
    <div className='siteRoot'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />

        {/* Default SEO */}
        <title>{config.siteTitle}</title>
        <meta name='description' content={config.siteDescription} />
        <meta property='og:title' content={config.siteTitle} />
        <meta property='og:url' content={config.siteUrl} />
        <meta property='og:locale' content={currentLocale.localeCode} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={config.siteTitle} />

        {/* Favicons */}
        <link rel='apple-touch-icon' sizes='180x180' href={faviconApple} />
        <link rel='apple-touch-icon' sizes='57x57' href={faviconApple57} />
        <link rel='apple-touch-icon' sizes='60x60' href={faviconApple60} />
        <link rel='apple-touch-icon' sizes='72x72' href={faviconApple72} />
        <link rel='apple-touch-icon' sizes='76x76' href={faviconApple76} />
        <link rel='apple-touch-icon' sizes='114x114' href={faviconApple114} />
        <link rel='apple-touch-icon' sizes='120x120' href={faviconApple120} />
        <link rel='apple-touch-icon' sizes='144x144' href={faviconApple144} />
        <link rel='apple-touch-icon' sizes='152x152' href={faviconApple152} />
        <link rel='apple-touch-icon' sizes='180x180' href={faviconApple180} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
        <link rel='mask-icon' href={faviconSafariPinned} color={theme.colours.primary} />
        <link rel='shortcut icon' href={favicon} />
        <meta name='msapplication-TileColor' content={theme.colours.primary} />
        <meta name='msapplication-config' content={withPrefix('/browserConfig.xml')} />
        <meta name='theme-color' content={theme.colours.contrast} />

        {/* Third-party css */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css' // eslint-disable-line
        />
      </Helmet>

      <ThemeProvider theme={localisedPreviewTheme}>
        <div className='siteContent'>
          <SiteHeader data={header} office={office} />
          {children}
        </div>
      </ThemeProvider>

      {/* Footer placed in seperate ThemeProvider to avoid Rendering an extra DIV in HTML output  */}
      <ThemeProvider theme={localisedPreviewTheme}>
        <FooterSection>
          {footer && <Footer data={footer} />}
          {isPreview && <PreviewTag>Preview Mode</PreviewTag>}
        </FooterSection>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  isPreview: PropTypes.bool.isRequired,
  office: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  locales: PropTypes.array.isRequired,
  currentLocale: PropTypes.object.isRequired,
};

export default Layout;
