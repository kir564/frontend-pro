import { rtkApi } from '@/shared/api/rtkApi';
import type { Rating } from '@/entities/rating';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-rating',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: '/article-rating',
        method: 'POST',
        body: { ...arg },
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } =
  articleRatingApi;
