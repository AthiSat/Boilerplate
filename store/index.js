import {configureStore} from '@reduxjs/toolkit';
// import jobSlice from './jobSlice';
// import qrCodeSlice from './qrCodeSlice';
import counterReducer from './counterSlice';
import qrCodeReducer from './qrCodeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    qrCode: qrCodeReducer,
  },
});

export default store;
