import { memo, SVGProps, VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './ArticleViewSelector.module.scss';

import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { ArticleView } from '../../model/types/article';
import { Button, Icon } from '@/shared/ui';

export interface ViewType {
  view: ArticleView;
  icon: VFC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
  { view: 'small', icon: TiledIcon },
  { view: 'big', icon: ListIcon },
];

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (_: ArticleView) => void;
}

export const ArticleViewSelector = memo(function ArticleViewSelector({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) {
  const { t } = useTranslation();

  const onClick = (view: ArticleView) => () => {
    onViewClick?.(view);
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={`clean`}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames(
              cls.icon,
              { [cls.active]: viewType.view === view },
              [],
            )}
          />
        </Button>
      ))}
    </div>
  );
});
