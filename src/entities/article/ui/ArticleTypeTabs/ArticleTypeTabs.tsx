import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { TabItem, Tabs } from 'shared/ui/tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (_: ArticleType) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs({
  className,
  value,
  onChangeType,
}: ArticleTypeTabsProps) {
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      { value: 'ALL', content: `${t('all')}` },
      { value: 'ECONOMICS', content: `${t('ec')}` },
      { value: 'IT', content: `${t('it')}` },
      { value: 'SCIENCE', content: `${t('sc')}` },
    ],
    [t],
  );

  const onTabsClick = useCallback(
    (type: TabItem<ArticleType>) => {
      onChangeType(type.value);
    },
    [onChangeType],
  );

  return (
    <Tabs<ArticleType>
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabsClick}
    />
  );
});
