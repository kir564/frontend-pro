import { StateSchema } from 'app/providers/storeProvider';
import { getCommentFormError, getCommentFormText } from './getCommentForm';

describe('getCommentForm', () => {
  test('getCommentFormError', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };

    expect(getCommentFormError(state as StateSchema)).toBe('error');
  });
  test('getCommentFormText', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'something text',
      },
    };

    expect(getCommentFormText(state as StateSchema)).toBe('something text');
  });
});
