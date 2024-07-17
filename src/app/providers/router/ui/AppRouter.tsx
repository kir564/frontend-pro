import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouteProps, routeConfig } from '../config/routeConfig';
import { LoaderPage } from 'widgets/loaderPage';

import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <div className="page-wrapper">{route.element}</div>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
