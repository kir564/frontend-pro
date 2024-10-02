import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button } from '@/shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { routePath } from '@/shared/config/router/routePath';
import { useSelector } from 'react-redux';
import { getCanArticleEdit } from '@/pages/articleDetailsPage/model/selectors/getCanEditArticle';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader({
  className,
}: ArticleDetailsPageHeaderProps) {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const canEditArticle = useSelector(getCanArticleEdit);

  const onBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

  const editArticle = useCallback(() => {
    navigate(`${routePath.article_details}${id}/edit`);
  }, [navigate, id]);

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>{`<< ${t('back')}`}</Button>
      {canEditArticle && (
        <Button onClick={editArticle} className={cls.editBtn}>
          {t('edit')}
        </Button>
      )}
    </div>
  );
});
