import { Popover } from '@headlessui/react';
import popupCls from '../../style/popup.module.scss';
import cls from './Popover.module.scss';
import { classNames } from 'shared/lib';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';

interface MyPopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropdownDirection;
}

export function MyPopover({
  className,
  trigger,
  direction = `bottomRight`,
  children,
}: MyPopoverProps) {
  return (
    <Popover
      as={`div`}
      className={classNames(cls.popover, {}, [className, popupCls.popup])}
    >
      <Popover.Button as={`div`} className={popupCls.trigger}>
        {trigger}
      </Popover.Button>

      <Popover.Panel
        unmount={false}
        className={classNames(cls.panel, {}, [popupCls[direction]])}
      >
        {children}
      </Popover.Panel>
    </Popover>
  );
}
