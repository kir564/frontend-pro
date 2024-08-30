export type AppRoutes =
  | 'main'
  | 'about'
  | 'not_found'
  | 'profile'
  | 'articles'
  | 'article_details'
  | 'article_create'
  | 'article_edit'
  | 'admin_panel'
  | 'forbidden';

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  articles: '/articles',
  article_details: '/articles/',
  article_create: '/articles/new',
  article_edit: '/articles/:id/edit',
  admin_panel: '/admin',
  forbidden: '/forbidden',
  not_found: '*',
};
