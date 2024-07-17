import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from 'shared/config/router/routePath';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData);

  let location = useLocation();

  if (!auth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace />;
  }

  return children;
}
