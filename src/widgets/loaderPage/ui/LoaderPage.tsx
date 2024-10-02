import { FC } from 'react';

import { classNames } from '@/shared/lib';
import cls from './LoaderPage.module.scss';
import { Loader } from '@/shared/ui';

interface LoaderPageProps {
  className?: string;
}

export const LoaderPage: FC<LoaderPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.loaderPage, {}, [className])}>
      <Loader />
    </div>
  );
};
