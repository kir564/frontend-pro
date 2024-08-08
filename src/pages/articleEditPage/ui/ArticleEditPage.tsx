import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Page } from 'widgets/page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = memo(function ArticleEditPage({
  className,
}: ArticleEditPageProps) {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {`${isEdit ? `Edit Article id = ${id}` : 'Create Article'}`}
    </Page>
  );
});
