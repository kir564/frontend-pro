import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { useThemeContext } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from '../../../shared/ui/button/Button';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <Button theme="clean" onClick={toggleTheme}>
        {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
