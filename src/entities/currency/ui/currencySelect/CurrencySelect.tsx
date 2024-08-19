import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './CurrencySelect.module.scss';
import { Select } from 'shared/ui';
import { SelectOptions } from 'shared/ui/select/Select';
import { CurrencyType } from 'entities/currency/model/types/currency';
import { Listbox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
  className?: string;
  readonly?: boolean;
  onChange?: (_: CurrencyType) => void;
  value?: CurrencyType;
}

const optionCurrency: SelectOptions<CurrencyType, any>[] = [
  { value: 'RUB', content: 'RUB' },
  { value: 'EUR', content: 'EUR' },
  { value: 'USD', content: 'USD' },
];

export const CurrencySelect: FC<CurrencySelectProps> = ({
  className,
  readonly,
  onChange,
  value,
}) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as CurrencyType);
  };

  return (
    <Listbox
      // direction={`top`}
      readonly={readonly}
      className={classNames(cls.currencySelect, {}, [className])}
      items={optionCurrency}
      value={value}
      onChange={onChangeHandler}
      label={`Укажите валюту`}
    />
    // <Select
    //   readonly={readonly}
    //   className={classNames(cls.currencySelect, {}, [className])}
    //   options={optionCurrency}
    //   value={value}
    //   onChange={onChangeHandler}
    // />
  );
};
