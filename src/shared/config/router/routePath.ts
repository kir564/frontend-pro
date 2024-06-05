export type AppRoutes = 'main' | 'about' | 'not_found';

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  not_found: '*',
};
