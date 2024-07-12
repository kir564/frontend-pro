import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './Select.module.scss';

export interface SelectOptions<T> {
  value: T;
  content: T;
}

interface SelectProps<T> {
  className?: string;
  label?: string;
  readonly?: boolean;
  options?: SelectOptions<T>[];
  value?: string;
  onChange?: (_: string) => void;
}

export const Select = memo(function Select({
  className,
  label,
  readonly,
  options,
  value,
  onChange,
}: SelectProps<string | number>) {
  const { t } = useTranslation();

  const optionList = useMemo(() => {
    return options?.map(({ value, content }) => (
      <option value={value} key={value}>
        {content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target?.value);
  };

  return (
    <div
      className={classNames(cls.wrapper, { [cls.readonly]: readonly }, [
        className,
      ])}
    >
      {label && <label className={cls.label}>{label}</label>}
      <select
        disabled={readonly}
        className={classNames(cls.select, {}, [])}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
