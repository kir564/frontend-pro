import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui';

interface ArticleTextBlockComponentProps {
  className?: string;
  block?: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  function ArticleTextBlockComponent({
    className,
    block,
  }: ArticleTextBlockComponentProps) {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block?.title && <Text title={block.title} className={cls.title} />}
        {block?.paragraphs.map((paragraph, index) => (
          <Text key={index} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  },
);
