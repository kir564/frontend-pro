import { memo, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib';

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (_: string) => void;
  type?: string;
  autoFocus?: boolean;
}

export const Input = memo(function Input({
  className,
  value,
  onChange,
  autoFocus,
  type = 'text',
  ...otherProps
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      {...otherProps}
    />
  );
});

// export const Input = memo(InputContainer);
