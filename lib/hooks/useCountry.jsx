'use client';

import React, { useEffect, useState } from 'react';
import { ICountryData, TCountryCode, getCountryDataList } from 'countries-list';
import * as reactCSC from 'react-country-state-city';

export default function useCountry() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const getCountryFlag = (code) => {
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`;
  };

  const getCountryStates = async (countryId) => {
    const states = await reactCSC.GetState(countryId);
    setStates(states);
  };

  React.useEffect(() => {
    (async () => {
      const countries = await reactCSC.GetCountries();
      console.log(countries);
      setCountries(countries);
    })();
  }, []);

  return { countries, getCountryFlag, getCountryStates, states };
}
