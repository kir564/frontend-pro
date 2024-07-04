import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants';

export const instanceApi = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
});
