import { SVGProps, VFC } from 'react';

import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

import { routePath } from 'shared/config/router/routePath';

export interface SideBarItemType {
  text: string;
  path: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const sideBarItemsList: SideBarItemType[] = [
  {
    Icon: HomeIcon,
    path: routePath.main,
    text: 'nav-main',
  },
  {
    Icon: AboutIcon,
    path: routePath.about,
    text: 'nav-about',
  },
  {
    Icon: ProfileIcon,
    path: routePath.profile,
    text: 'nav-profile',
  },
];
