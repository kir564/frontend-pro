import { StateSchema } from 'app/providers/storeProvider';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './comments';

describe('comments', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true,
        },
      },
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(
      true,
    );
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: 'error',
        },
      },
    };

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      'error',
    );
  });
});
