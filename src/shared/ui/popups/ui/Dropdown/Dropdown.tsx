import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib';
import cls from './Dropdown.module.scss';
import popupCls from '../../style/popup.module.scss';
import { Fragment } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import type { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../../../appLink/AppLink';

export interface DropdownItem {
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottomLeft' } = props;
  return (
    <Menu
      as={`div`}
      className={classNames(cls.dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button as={`div`} className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [popupCls[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                [],
              )}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} key={index}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={index}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
