import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './CountrySelect.module.scss';
import { SelectOptions } from 'shared/ui/select/Select';
import type { CountryType } from '../../model/types/country';
import { ListBox } from 'shared/ui/popups';

interface CountryTypeProps {
  className?: string;
  readonly?: boolean;
  onChange?: (_: CountryType) => void;
  value?: CountryType;
}

const optionCurrency: SelectOptions<CountryType, any>[] = [
  { value: 'Russia', content: 'Russia' },
  { value: 'Belarus', content: 'Belarus' },
  { value: 'Kazakhstan', content: 'Kazakhstan' },
];

export const CountrySelect: FC<CountryTypeProps> = ({
  className,
  readonly,
  onChange,
  value,
}) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as CountryType);
  };

  return (
    <ListBox
      label={`Укажите страну`}
      direction={`topLeft`}
      readonly={readonly}
      className={classNames(cls.countrySelect, {}, [className])}
      items={optionCurrency}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
