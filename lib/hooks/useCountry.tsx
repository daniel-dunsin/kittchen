'use client';

import React, { useEffect, useState } from 'react';
import { ICountryData, TCountryCode, getCountryDataList } from 'countries-list';

export default function useCountry() {
  const [countries, setCountries] = useState<ICountryData[]>([]);

  const getCountryFlag = (code: TCountryCode) => {
    return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`;
  };

  useEffect(() => {
    (async () => {
      const countries = getCountryDataList();
      setCountries(countries);
    })();
  }, []);

  return { countries, getCountryFlag };
}
