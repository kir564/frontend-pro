import { addCommentForArticle } from './addCommentForArticle';
import type { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { getUserAuthData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';

jest.mock('entities/user', () => ({
  getUserAuthData: jest.fn(),
}));

jest.mock('entities/article', () => ({
  getArticleDetailsData: jest.fn(),
}));

describe('fetchProfileData', () => {
  test('success', async () => {
    const data: DeepPartial<ArticleDetailsCommentsSchema> = {};

    (getUserAuthData as jest.Mock).mockReturnValue({ id: 'user1' });
    (getArticleDetailsData as jest.Mock).mockReturnValue({ id: 'article1' });

    const asyncThunk = new TestAsyncThunk(addCommentForArticle);
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk('new comment');

    expect(asyncThunk.api.post).toHaveBeenCalled();
    // expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    // expect(result.payload).toEqual({});
  });
  test('error', async () => {
    const error = { status: 403 };

    const asyncThunk = new TestAsyncThunk(addCommentForArticle);
    asyncThunk.api.post.mockReturnValue(Promise.resolve(error));
    const result = await asyncThunk.callThunk('new comment');

    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
