import { Fragment, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ListBox.module.scss';

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
import { Button } from '../button/Button';
import { DropdownDirection } from 'shared/types/ui';

export function Listbox({
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
        className={classNames(cls.listBox, { [cls.disabled]: readonly }, [
          className,
        ])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button as={`div`}>
          <Button className={cls.trigger}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, [cls[direction]])}
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
                    { [cls.active]: active, [cls.disabled]: item.disabled },
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
