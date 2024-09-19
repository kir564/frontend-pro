import {
  addCommentFormActions,
  addCommentFormReducer,
} from './addCommentFormSlice';
import type { AddCommentFormSchema } from '../types/addCommentForm';

describe('addCommentFormSlice', () => {
  test('setText', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: '',
    };

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('something text'),
      ),
    ).toEqual({ text: 'something text' });
  });
});
