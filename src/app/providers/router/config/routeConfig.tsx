import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/config/router/routePath';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: routePath['main'],
    element: <MainPage />,
  },
  about: {
    path: routePath['about'],
    element: <AboutPage />,
  },
};
