export type UserRole = 'USER' | 'ADMIN' | 'MANAGER';
export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  role?: UserRole[];
}

export interface UserSchema {
  authData?: IUser;
  _initAuth?: boolean;
}
