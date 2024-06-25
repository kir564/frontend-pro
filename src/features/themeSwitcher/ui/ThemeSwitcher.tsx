import { FC } from 'react';

import { classNames } from 'shared/lib';
import { useThemeContext } from 'app/providers/themeProvider';
import { Button } from '../../../shared/ui/button/Button';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme="clean" onClick={toggleTheme}>
        {theme === 'app-dark-theme' ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
