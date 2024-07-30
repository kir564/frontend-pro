import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article, ArticleView } from 'entities/article';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: 'small',
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    initView: (state) => {
      state.view = localStorage.getItem(
        ARTICLES_VIEW_LOCAL_STORAGE_KEY,
      ) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageAction } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
