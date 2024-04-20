'use client';

import React, { useEffect, useState } from 'react';
import { ICountryData, TCountryCode, getCountryDataList } from 'countries-list';
import * as reactCSC from 'react-country-state-city';

export default function useCountry() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const getCountryFlag = (code) => {
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`;
  };

  const getCountryStates = async (countryId) => {
    const states = await reactCSC.GetState(countryId);
    setStates(states);
  };

  const searchCountry = async (search) => {
    search = search.trim();
    if (search === '') {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries((countries) =>
        countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  };

  React.useEffect(() => {
    (async () => {
      const countries = await reactCSC.GetCountries();
      setCountries(countries);
      setFilteredCountries(countries);
    })();
  }, []);

  return { countries, getCountryFlag, getCountryStates, states, searchCountry, filteredCountries };
}
