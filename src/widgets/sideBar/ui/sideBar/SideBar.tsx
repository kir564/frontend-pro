import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "features/themeSwitcher";
import { LanguageSwitcher } from "features/languageSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleWith = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleWith}>{t("toggle")}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
