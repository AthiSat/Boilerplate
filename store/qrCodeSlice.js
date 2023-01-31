import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  qrCodeStoreState: [],
};

export const qrCodeSlice = createSlice({
  name: 'qrCodeStore',
  initialState,
  reducers: {
    setQrCodeDispatcher: (state, action) => {
      state.qrCodeStoreState = [...state.qrCodeStoreState, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {setQrCodeDispatcher} = qrCodeSlice.actions;

export default qrCodeSlice.reducer;
