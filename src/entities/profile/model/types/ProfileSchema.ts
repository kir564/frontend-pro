import { CurrencyType } from 'entities/currency';
import { CountryType } from 'entities/country';

export interface Profile {
  first?: string;
  lastName?: string;
  age?: number | string;
  currency?: CurrencyType;
  country?: CountryType;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
