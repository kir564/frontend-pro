import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';

interface LanguageSwitcherProps {
  className?: string;
  collapsed?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  className,
  collapsed,
}) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.languageSwitcher, {}, [className])}>
      <Button className={cls.btnColor} theme="clean" onClick={toggleLanguage}>
        {collapsed ? t('short-lang') : t('lang')}
      </Button>
    </div>
  );
};
