import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsPageRecommendationSchema;
}
