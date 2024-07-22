export type AppRoutes =
  | 'main'
  | 'about'
  | 'not_found'
  | 'profile'
  | 'articles'
  | 'article_details';

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  articles: '/articles',
  article_details: '/articles/',
  not_found: '*',
};
