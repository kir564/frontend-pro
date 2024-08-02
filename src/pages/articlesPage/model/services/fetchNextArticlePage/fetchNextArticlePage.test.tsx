import { fetchNextArticlePage } from './fetchNextArticlePage';
import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage', () => {
  test('success', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: false,
        hasMore: true,
        page: 2,
        ids: [],
        entities: {},
      },
    });

    const result = await asyncThunk.callThunk();

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test('fetchArticlesList not called', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: false,
        hasMore: false,
        page: 2,
        ids: [],
        entities: {},
      },
    });

    const result = await asyncThunk.callThunk();

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('fetchArticlesList not called with isLoading is true', async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        isLoading: true,
        hasMore: true,
        page: 2,
        ids: [],
        entities: {},
      },
    });

    const result = await asyncThunk.callThunk();

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
