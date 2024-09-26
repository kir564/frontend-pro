import { Fragment, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ListBox.module.scss';
import popupCls from '../../style/popup.module.scss';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItems[];
  value?: string;
  defaultValue?: string;
  onChange: (_: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../button/Button';
import type { DropdownDirection } from 'shared/types/ui';

export function ListBox({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottomLeft',
  label,
}: ListBoxProps) {
  return (
    <div>
      {label && <span>{`${label}: `}</span>}
      <HListbox
        disabled={readonly}
        as={`div`}
        className={classNames(cls.listBox, { [popupCls.disabled]: readonly }, [
          className,
          popupCls.popup,
        ])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button as={`div`}>
          <Button className={cls.trigger}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [popupCls[direction]])}
        >
          {items?.map((item) => (
            <HListbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                    [],
                  )}
                >
                  {selected && '*'}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </div>
  );
}
