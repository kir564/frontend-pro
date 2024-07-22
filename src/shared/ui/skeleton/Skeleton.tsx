import { CSSProperties, memo } from 'react';

import { classNames } from 'shared/lib';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo(function Skeleton({
  className,
  border,
  height,
  width,
}: SkeletonProps) {
  const styles: CSSProperties = {
    borderRadius: border,
    height,
    width,
  };
  return (
    <div
      style={styles}
      className={classNames(cls.skeleton, {}, [className])}
    ></div>
  );
});
