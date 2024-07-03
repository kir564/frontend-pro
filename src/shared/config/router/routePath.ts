export type AppRoutes = 'main' | 'about' | 'not_found' | 'profile';

export const routePath: Record<AppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  not_found: '*',
};
