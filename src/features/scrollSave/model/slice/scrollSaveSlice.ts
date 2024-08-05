import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

export const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;

export const { reducer: scrollSaveReducer } = scrollSaveSlice;
