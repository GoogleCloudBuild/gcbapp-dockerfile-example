import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import { addLocaleToPath } from '../utils/helpers';
import LocaleSwitcher from './LocaleSwitcher';
import Link from './Link';
import theme from '../styles/theme';
import crimsonLogo from '../logos/crimson-logo.svg';

const Header = styled.header`
  background: ${(props) => props.theme.colours.nav.background};
  border-bottom: 2px solid ${(props) => props.theme.colours.nav.border};
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  z-index: 100;
  height: 65px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
  }

  li {
    list-style: none;
    margin-left: 1em;
    display: flex;
    flex-direction: row;
  }
`;

const menuLinkStyle = css`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colours.nav.text};
  font-weight: 400;
  transition: all 0.2s;
  font-size: 12px;
  &:hover {
    color: ${(props) => props.theme.colours.callToAction};
  }
`;

const MenuLink = styled(GatsbyLink).attrs({
  activeStyle: { color: theme.colours.callToAction },
})`
  ${menuLinkStyle}
`;

const ExternalMenuLink = styled.a`
  ${menuLinkStyle}
`;

const contactUsButton = {
  internal: {
    type: 'ContentfulLinkInternal',
  },
  text: 'Free consultation',
  theme: 'Call To Action Outline',
  page: {
    slug: 'contact-us',
  },
};

const Menu = ({ locale }) => (
  <Header>
    <Nav>
      <ul>
        <li>
          <MenuLink to={addLocaleToPath('/', locale)} exact>
            <img src={crimsonLogo} width='107' height='32' alt='' />
          </MenuLink>
        </li>
        <li>
          <ExternalMenuLink href='https://blog.crimsoneducation.org'>
              Our blog
          </ExternalMenuLink>
        </li>
        <li>
          <MenuLink to={addLocaleToPath('/admission-support', locale)}>
              Admission Support
          </MenuLink>
        </li>
        <li>
          <MenuLink to={addLocaleToPath('/about', locale)}>
              About us
          </MenuLink>
        </li>
        <li>
          <Link href data={contactUsButton} locale={locale}>
              Free Consultation
          </Link>
          <LocaleSwitcher locale={locale} />
        </li>
      </ul>
    </Nav>
  </Header>
);

Menu.propTypes = {
  locale: PropTypes.string,
};

export default Menu;
