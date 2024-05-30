import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.languageSwitcher, {}, [className])}>
      <Button className={cls.btnColor} theme="clean" onClick={toggleLanguage}>
        {t('lang')}
      </Button>
    </div>
  );
};
