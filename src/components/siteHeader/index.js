/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import { withTheme } from 'styled-components';

import CallUs from '../buttons/CallUs';
import LocaleSwitcher from '../LocaleSwitcher';
import Link from '../Link';
import NavItem from './NavItem';
import mailIcon from '../../images/svgIcons/Mail.svg';

import {
  ShowInTabletContainer,
  ShowInDesktopContainer,
  MobileStickyContainer,
  DesktopStickyContainer,
  DesktopContainer,
  MobileContainer,
  SubContainer,
  Hamburger,
  HeaderButtonContainer,
  Logo,
  ContactLink,
} from './styles';

const getItemId = (item) => (
  item.link && item.link.text
    ? item.link.text.toLowerCase().replace(/\s/g, '_')
    : item.contentful_id
);

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenHamburger: false,
      activeMenuIndex: null,
      activeMenuId: null,
      menuIds: [],
    };
  }

  componentDidMount() {
    const menuIds = this.props.data.items.map(getItemId);
    this.setState({ menuIds });
  }

  onOpen = (index, id, callback = () => null) => {
    const wasClosed = !this.state.activeMenuId;
    this.setState({
      activeMenuIndex: index,
      activeMenuId: id,
    });
    window.scroll(0, 0);
    if (wasClosed) {
      document.addEventListener('click', this.handleClickOutside, false);
    }
    callback();
  };

  onClose = () => {
    this.setState({
      activeMenuIndex: null,
      activeMenuId: null,
    });
    document.removeEventListener('click', this.handleClickOutside, false);
  };

  handleClickOutside = (e) => {
    const { menuIds } = this.state;
    if (!menuIds.includes(e.target.id) && e.target.id !== `${this.state.activeMenuId}-container`) {
      this.onClose();
    }
  }

  handleClickStickyHeader = () => {
    this.setState(({ isStickyHeader }) => ({
      isStickyHeader: !isStickyHeader,
    }));
  }

  handleClickHamburger = () => {
    this.setState(({ isOpenHamburger }) => ({
      isOpenHamburger: !isOpenHamburger,
    }));
    window.scroll(0, 0);
  }

  render() {
    const {
      data: {
        logo,
        items,
        callToActionButton,
        localeSwitcher,
      },
      routeParams,
      office,
      theme,
    } = this.props;
    const {
      isOpenHamburger,
      activeMenuIndex,
    } = this.state;

    return (
      <div data-ga-category='Top Nav'>
        <MobileStickyContainer isOpen={isOpenHamburger}>
          <div>
            <MobileContainer>
              <SubContainer>
                <Logo data={logo} />
                {!isOpenHamburger
                  && office
                  && <CallUs phoneNumber={office.phoneNumber} />
                }
                {!isOpenHamburger && (
                  <ContactLink
                    locale={theme.currentLocale.slug}
                    data={{ ...callToActionButton, theme: null }}
                  >
                    <img alt='contact icon' src={mailIcon} />
                  </ContactLink>
                )}
                <Hamburger id='hamburger-menu'>
                  <HamburgerMenu
                    isOpen={isOpenHamburger}
                    menuClicked={() => {
                      this.handleClickHamburger();
                      this.handleClickStickyHeader();
                    }}
                    width={22.5}
                    height={12}
                    strokeWidth={2}
                    rotate={0}
                    color={theme.colours.callToAction}
                    borderRadius={0}
                    animationDuration={0.5}
                  />
                </Hamburger>
              </SubContainer>
              {isOpenHamburger
                && (
                  <div>
                    {items.map((item, index) => (
                      <NavItem
                        routeParams={routeParams}
                        navItem={item}
                        key={item.contentful_id}
                        isOpen={activeMenuIndex === index}
                        onOpen={() => this.onOpen(index)}
                        onCloseDropdown={this.onClose}
                        onClickHamburger={this.handleClickHamburger}
                        onClickStickyHeader={this.handleClickStickyHeader}
                      />
                    ))}
                    <LocaleSwitcher data={localeSwitcher} closeMenus={this.onClose} deviceMode />
                  </div>
                )
              }
            </MobileContainer>
          </div>
        </MobileStickyContainer>
        <DesktopStickyContainer id='site-header'>
          <div>
            <DesktopContainer
              id={this.state.activeMenuId ? `${this.state.activeMenuId}-container` : 'closed-container'}
            >
              <Logo data={logo} />
              {items.map((item, index) => {
                const targetId = getItemId(item);
                return (
                  <NavItem
                    id={targetId}
                    routeParams={routeParams}
                    navItem={item}
                    key={item.contentful_id}
                    isOpen={activeMenuIndex === index}
                    onOpen={() => this.onOpen(index, targetId)}
                    onCloseDropdown={this.onClose}
                    onClickHamburger={this.handleClickHamburger}
                    onClickStickyHeader={this.handleClickStickyHeader}
                  />
                );
              })}
              <HeaderButtonContainer>
                {office && <CallUs phoneNumber={office.phoneNumber} />}
                <ShowInTabletContainer>
                  <Link
                    locale={theme.currentLocale.slug}
                    data={{ ...callToActionButton, theme: null }}
                  >
                    <img alt='contact icon' src={mailIcon} />
                  </Link>
                </ShowInTabletContainer>
                <ShowInDesktopContainer>
                  <Link
                    locale={theme.currentLocale.slug}
                    data={callToActionButton}
                  />
                </ShowInDesktopContainer>
                <LocaleSwitcher data={localeSwitcher} closeMenus={this.onClose} />
              </HeaderButtonContainer>
            </DesktopContainer>
          </div>
        </DesktopStickyContainer>
      </div>
    );
  }
}

SiteHeader.propTypes = {
  data: PropTypes.object.isRequired,
  routeParams: PropTypes.object,
  office: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(SiteHeader);
/* eslint-disable no-confusing-arrow */
