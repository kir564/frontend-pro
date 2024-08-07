import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './Select.module.scss';

export interface SelectOptions<T, P> {
  value: T;
  content: P;
}

interface SelectProps<T extends string, P> {
  className?: string;
  label?: string;
  readonly?: boolean;
  options?: SelectOptions<T, P>[];
  value?: T;
  onChange?: (_: T) => void;
}

export const Select = <T extends string>({
  className,
  label,
  readonly,
  options,
  value,
  onChange,
}: SelectProps<T, any>) => {
  const { t } = useTranslation();

  const optionList = useMemo(() => {
    return options?.map(({ value, content }) => (
      <option value={value} key={value}>
        {content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target?.value as T);
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
};
