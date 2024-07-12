import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/config/router/routePath';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  main: {
    path: routePath.main,
    element: <MainPage />,
  },
  about: {
    path: routePath.about,
    element: <AboutPage />,
  },
  profile: {
    path: routePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  not_found: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
