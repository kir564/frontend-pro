import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './AdminPanelPage.module.scss';
import { Page } from 'widgets/page/Page';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo(function AdminPanelPage({
  className,
}: AdminPanelPageProps) {
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
      {`AdminPanelPage`}
    </Page>
  );
});
