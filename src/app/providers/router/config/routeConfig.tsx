import { UserRole } from 'entities/user';
import { AboutPage } from 'pages/aboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { ArticleEditPage } from 'pages/articleEditPage';
import { ArticlesPage } from 'pages/articlesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routePath } from 'shared/config/router/routePath';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
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
    path: `${routePath.profile}/:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  article_details: {
    path: `${routePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  article_create: {
    path: `${routePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  article_edit: {
    path: `${routePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  admin_panel: {
    path: `${routePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['ADMIN', 'MANAGER'],
  },
  forbidden: {
    path: `${routePath.forbidden}`,
    element: <ForbiddenPage />,
  },
  not_found: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
