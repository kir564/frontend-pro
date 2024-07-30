import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleListItem.module.scss';

import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { Avatar, Button, Card, Icon, Text } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/router/routePath';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleListItem = memo(function ArticleListItem({
  className,
  article,
  isLoading,
  view = 'small',
}: ArticleListItemProps) {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const textBlock = article.blocks.find(
    (block) => block.type === 'TEXT',
  ) as ArticleTextBlock;

  const onOpenArticle = useCallback(() => {
    navigate(routePath.article_details + article.id);
  }, [navigate, article.id]);

  if (view === 'big') {
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.header}>
            <Avatar src={article.user.avatar} size={20} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle}>{t('read-more')}...</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
