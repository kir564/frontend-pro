import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/config/router/routePath';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};
