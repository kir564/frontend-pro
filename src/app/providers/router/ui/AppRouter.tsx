import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { LoaderPage } from 'widgets/loaderPage';

export const AppRouter = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        {Object.values(routeConfig).map((route) => {
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
};
