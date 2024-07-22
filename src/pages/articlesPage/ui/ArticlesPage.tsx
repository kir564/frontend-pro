import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage = memo(function ArticlePage({
  className,
}: ArticlesPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      {` ArticlesPage`}
    </div>
  );
});
