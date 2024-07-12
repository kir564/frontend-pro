import { memo, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (_: string) => void;
  type?: string;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo(function Input({
  className,
  value,
  onChange,
  autoFocus,
  readonly,
  type = 'text',
  ...otherProps
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <input
      readOnly={readonly}
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames('', { [cls.readonly]: readonly }, [className])}
      {...otherProps}
    />
  );
});

// export const Input = memo(InputContainer);
