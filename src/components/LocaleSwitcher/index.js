import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { getEnabledLanguages } from '../../utils/helpers';
import DropdownArrow from '../svgs/DropdownArrow';
import LocaleListItems from './LocaleListItems';
import {
  Switcher,
  SelectedCountry,
  DropdownContainer,
  LocaleSection,
  LocaleListHeading,
  LocaleLists,
  LocaleSubLists,
  LocaleList,
} from './styles';

class LocaleSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      enabledLocales: [],
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    const { data: { list } } = this.props;

    const enabledLocales = getEnabledLanguages(list)
      .reduce((acc, curr) => {
        const alreadyExists = acc.find((entry) => entry.country === curr.country.countryName);
        if (alreadyExists) {
          if (curr.language.languageLocalName === 'English') {
            alreadyExists.languages.unshift({
              name: curr.language.languageLocalName,
              slug: curr.slug,
              locale: curr.localeCode,
              id: curr.localeId,
            });
          } else {
            alreadyExists.languages.push({
              name: curr.language.languageLocalName,
              slug: curr.slug,
              locale: curr.localeCode,
              id: curr.localeId,
            });
          }
        } else {
          const thing = {
            country: curr.country.countryName,
            flag: curr.country.flag,
            languages: [{
              name: curr.language.languageLocalName,
              slug: curr.slug,
              locale: curr.localeCode,
              id: curr.localeId,
            }],
          };
          acc.push(thing);
        }
        return acc;
      }, [])
      .sort((a, b) => a.country.localeCompare(b.country));

    this.setState({ enabledLocales });
  }

  handleClickOutside(e) {
    if (e.target.id === 'locale-switcher') { return; }
    if (e.target.id === 'locale-selection') { return; }
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  toggleDropdown() {
    const { isOpen } = this.state;
    const { closeMenus } = this.props;
    this.setState({ isOpen: !isOpen });
    closeMenus();
    if (!isOpen) {
      document.addEventListener('click', this.handleClickOutside, false);
    }
  }

  render() {
    const { isOpen, enabledLocales } = this.state;
    const { data, theme, deviceMode } = this.props;
    const { currentLocale } = theme;
    const { heading } = data;

    const pathname = typeof window !== 'undefined' && window.location && window.location.pathname;
    const nakedPath = currentLocale && pathname
      ? pathname.replace(`/${currentLocale.slug}`, '')
      : pathname;

    const countryCount = enabledLocales.length;

    return (
      <div data-ga-category='Locale Switcher'>
        <Switcher id='locale-switcher' onClick={this.toggleDropdown}>
          <img
            src='//images.ctfassets.net/tcuhs00ixsl3/37ULyeBK4MMco2QkEQAgYy/386733d08098fa69afc700ccdcbeb300/world.svg'
            alt='Switch locale'
          />
          <SelectedCountry>
            {currentLocale ? currentLocale.country.countryCode.toUpperCase() : 'Select language'}
          </SelectedCountry>
          <DropdownArrow fill={theme.colours.callToAction} />
        </Switcher>

        <DropdownContainer id='locale-selection' isOpen={isOpen} count={countryCount} deviceMode={deviceMode}>
          <LocaleSection>
            <LocaleLists>
              <LocaleListHeading>{heading}</LocaleListHeading>
              <LocaleSubLists>
                <LocaleList>
                  {enabledLocales
                    .slice(0, Math.ceil(enabledLocales.length / 2))
                    .map((loc) => (
                      <LocaleListItems
                        key={loc.country}
                        loc={loc}
                        currentLocale={currentLocale}
                        isOpen={isOpen}
                        nakedPath={nakedPath}
                      />
                    ))}
                </LocaleList>
                <LocaleList>
                  {enabledLocales
                    .slice(Math.ceil(enabledLocales.length / 2), enabledLocales.length)
                    .map((loc) => (
                      <LocaleListItems
                        key={loc.country}
                        loc={loc}
                        currentLocale={currentLocale}
                        isOpen={isOpen}
                        nakedPath={nakedPath}
                      />
                    ))}
                </LocaleList>
              </LocaleSubLists>
            </LocaleLists>
          </LocaleSection>
        </DropdownContainer>
      </div>
    );
  }
}

LocaleSwitcher.propTypes = {
  data: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  closeMenus: PropTypes.func.isRequired,
  deviceMode: PropTypes.bool,
};

export default withTheme(LocaleSwitcher);
