import { memo, Suspense, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { LoaderPage } from 'widgets/loaderPage';
import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';

export const AppRouter = memo(function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((item) => {
      if (!isAuth && item.authOnly) {
        return false;
      } else {
        return true;
      }
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<div className="page-wrapper">{route.element}</div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
});
