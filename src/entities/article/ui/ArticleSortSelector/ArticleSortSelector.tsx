import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleSortSelector.module.scss';
import { Select } from 'shared/ui';
import { SelectOptions } from 'shared/ui/select/Select';
import type { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/article/model/types/article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (_: SortOrder) => void;
  onChangeSort: (_: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOptions<SortOrder, any>[]>(
    () => [
      { value: 'asc', content: t('ascending') },
      { value: 'desc', content: t('descending') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField, any>[]>(
    () => [
      { value: 'createdAt', content: t('created') },
      { value: 'title', content: t('title') },
      { value: 'view', content: t('views') },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select
        label={`${t('sort-by')}: `}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={`${t('by')}: `}
        onChange={onChangeOrder}
        options={orderOptions}
        value={order}
      />
    </div>
  );
});
