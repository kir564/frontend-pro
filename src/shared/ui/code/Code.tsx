import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib';
import cls from './Code.module.scss';
import { Button } from '../button/Button';

import CopyIcon from '@/shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code({ className, text }: CodeProps) {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} theme="clean" onClick={onCopy}>
        <CopyIcon className={cls.icon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
