import type { Article } from 'entities/article';
import { rtkApi } from 'shared/api/rtkApi';
import { routePath } from 'shared/config/router/routePath';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: routePath.articles,
        params: {
          _expand: 'user',
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetArticlesRecommendationsQuery } = recommendationsApi;
