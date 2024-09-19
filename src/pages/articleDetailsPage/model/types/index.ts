import type { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import type { ArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsPageRecommendationSchema;
}
