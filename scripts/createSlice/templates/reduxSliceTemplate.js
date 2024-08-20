const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (
  sliceName,
) => `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${firstCharUpperCase(sliceName)}Schema } from '../types/${firstCharUpperCase(sliceName)}Schema';

const initialState: ${firstCharUpperCase(sliceName)}Schema = {
  // isLoading: false,
  // error: undefined,
  // data: undefined,
};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBy.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = '';
  //     })
  //     .addCase(
  //       fetchBy.fulfilled,
  //       (state, action: PayloadAction<>) => {
  //         state.isLoading = false;
  //         state.data = action.payload;
  //       },
  //     )
  //     .addCase(fetchBy.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
