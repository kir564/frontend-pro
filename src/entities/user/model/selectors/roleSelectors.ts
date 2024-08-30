import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';

export const getUserRoles = (state: StateSchema) => state.user.authData?.role;

export const isAdmin = createSelector(getUserRoles, (roles) =>
  roles?.includes('ADMIN'),
);

export const isManager = createSelector(getUserRoles, (roles) =>
  roles?.includes('MANAGER'),
);
