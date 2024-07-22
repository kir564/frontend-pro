import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from 'entities/article/model/types/article';
import { Text } from 'shared/ui';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  function ArticleImageBlockComponent({
    className,
    block,
  }: ArticleImageBlockComponentProps) {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} />}
      </div>
    );
  },
);
