import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

import { routePath } from 'shared/config/router/routePath';
import { SideBarItemType } from '../types/sideBar';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
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
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        Icon: ProfileIcon,
        path: `${routePath.profile}/${userData.id}`,
        text: 'nav-profile',
        authOnly: true,
      },
      {
        Icon: ArticlesIcon,
        path: routePath.articles,
        text: 'nav-articles',
        authOnly: true,
      },
    );
  }

  return sideBarItemsList;
});
