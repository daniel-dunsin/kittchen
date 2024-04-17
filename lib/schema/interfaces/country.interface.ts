import { ICountryData } from 'countries-list';

export interface Country extends ICountryData {
  id: number;
  phone_code: number;
}

export interface State {
  id: number;
  name: string;
  state_code: string;
}
