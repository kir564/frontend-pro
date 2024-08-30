import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ForbiddenPage.module.scss';
import { Page } from 'widgets/page/Page';
import { Text } from 'shared/ui';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo(function ForbiddenPage({
  className,
}: ForbiddenPageProps) {
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
      <Text text={t('no-access')} />
    </Page>
  );
});
