import { getUserAuthData, getUserRoles } from '@/entities/user';
import type { UserRole } from '@/entities/user';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from '@/shared/config/router/routePath';

export function RequireAuth({
  children,
  roles,
}: {
  children: JSX.Element;
  roles?: UserRole[];
}) {
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  let location = useLocation();

  if (!auth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={routePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}
