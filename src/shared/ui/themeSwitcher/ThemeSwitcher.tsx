import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { useThemeContext } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from '../button/Button';
import { Theme } from 'app/providers/themeProvider';
import DarkIcon from '../../assets/icons/theme-dark.svg';
import LightIcon from '../../assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <Button theme={ButtonTheme.CLEAN} onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
