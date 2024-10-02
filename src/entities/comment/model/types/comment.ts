import type { IUser } from '@/entities/user';

export interface Comment {
  id: string;
  text: string;
  user: IUser;
}
