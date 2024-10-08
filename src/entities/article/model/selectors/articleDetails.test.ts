import { StateSchema } from '@/app/providers/storeProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('getArticleDetailsData', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'article title',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toBe('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    };
    expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
  });
});
