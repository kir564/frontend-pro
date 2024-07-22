import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from 'entities/article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/article/model/selectors/articleDetails';
import { Avatar, Skeleton, Text, Icon } from 'shared/ui';

import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlock } from 'entities/article/model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(function ArticleDetails({
  className,
  id,
}: ArticleDetailsProps) {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return (
          <ArticleCodeBlockComponent
            className={cls.block}
            key={block.id}
            block={block}
          />
        );

      case 'IMAGE':
        return (
          <ArticleImageBlockComponent
            className={cls.block}
            key={block.id}
            block={block}
          />
        );

      case 'TEXT':
        return (
          <ArticleTextBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
          />
        );

      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton
          width={100}
          height={100}
          border={`50%`}
          className={cls.avatar}
        />
        <Skeleton width={`40%`} height={32} className={cls.title} />
        <Skeleton width={`60%`} height={24} className={cls.skeleton} />
        <Skeleton width={`100%`} height={100} className={cls.skeleton} />
        <Skeleton width={`100%`} height={100} className={cls.skeleton} />
      </div>
    );
  } else if (error) {
    content = <Text align={`center`} text={t('err')} />;
  } else {
    content = (
      <>
        <Avatar className={cls.avatar} src={article?.img} size={100} />
        <Text
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={`l`}
        />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={String(article?.createdAt)} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
