import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((props) => {
          return <Route key={props.path} {...props} />;
        })}
      </Routes>
    </Suspense>
  );
};
