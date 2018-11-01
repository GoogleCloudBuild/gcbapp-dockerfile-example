import React from 'react';
import PropTypes from 'prop-types';
import {
  LocaleListItem,
  SelectedLocaleIndicator,
  Flag,
  Country,
  Dash,
  Language,
  ChangeLocale,
  Languages,
  Slash,
} from './styles';

const LocaleListItems = ({
  loc, currentLocale, isOpen, nakedPath,
}) => {
  const countrySelected = loc.country === (currentLocale && currentLocale.country.countryName);
  const useMultiline = loc.languages.length >= 3 || loc.country.length > 15;
  return (
    <LocaleListItem key={loc.country} selected={countrySelected}>
      {countrySelected && <SelectedLocaleIndicator />}
      {loc.flag && <Flag src={loc.flag.file.url} alt={`${loc.country} flag`} />}
      <Country
        href={`/${loc.languages[0].slug}${nakedPath}`}
      >
        {`${loc.country}`}
      </Country>
      <Dash>—</Dash>
      <Languages
        multiline={useMultiline}
      >
        {loc.languages.map((lang, i) => {
          const langSelected = lang.name === currentLocale.language.languageLocalName;
          return (
            <Language
              key={lang.id}
              multiline={useMultiline}
            >
              <ChangeLocale
                href={`/${lang.slug}${nakedPath}`}
                selected={countrySelected && langSelected}
                isOpen={isOpen}
              >
                {lang.name}
              </ChangeLocale>
              {(i !== loc.languages.length - 1)
                && <Slash multiline={useMultiline}>/</Slash>}
            </Language>
          );
        })}
      </Languages>
    </LocaleListItem>
  );
};

LocaleListItems.propTypes = {
  loc: PropTypes.object.isRequired,
  currentLocale: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  nakedPath: PropTypes.string,
};

export default LocaleListItems;
