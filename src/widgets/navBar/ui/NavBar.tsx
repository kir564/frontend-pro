import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import cls from "./NavBar.module.scss";
import { AppLink } from "shared/ui";

interface NavBar {
  className?: string;
}

export const NavBar: FC<NavBar> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme="secondary" to="/" className={cls.mainLink}>
          {t("nav-main")}
        </AppLink>
        <AppLink theme="secondary" to="/about">
          {t("nav-about")}
        </AppLink>
      </div>
    </div>
  );
};
