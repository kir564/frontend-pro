export type AppRoutes =
  | 'main'
  | 'about'
  | 'not_found'
  | 'profile'
  | 'articles'
  | 'article_details'
  | 'article_create'
  | 'article_edit';

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  articles: '/articles',
  article_details: '/articles/',
  article_create: '/articles/new',
  article_edit: '/articles/:id/edit',
  not_found: '*',
};
