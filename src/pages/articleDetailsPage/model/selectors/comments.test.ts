import { StateSchema } from 'app/providers/storeProvider';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './comments';
import { getArticleComments } from '../slice/articleDetailsCommentsSlice';

describe('comments', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(
      true,
    );
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      'error',
    );
  });
});
