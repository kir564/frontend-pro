import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import { classNames } from 'shared/lib';
import cls from './Page.module.scss';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page({
  className,
  children,
  onScrollEnd,
}: PageProps) {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
