import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '@/entities/article/model/types/article';
import { Code } from '@/shared/ui';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  function ArticleCodeBlockComponent({
    className,
    block,
  }: ArticleCodeBlockComponentProps) {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <Code text={block?.code} />
      </div>
    );
  },
);
