import { CountryType, CurrencyType } from 'shared/types';

export interface Profile {
  first: string;
  lastName: string;
  age: number;
  currency: CurrencyType;
  country: CountryType;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
