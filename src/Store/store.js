import { configureStore } from '@reduxjs/toolkit';
// Import slices

//!Persist block *********************
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE, 
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { mainReducer } from './mainReducer';



const persistMainConfig = {
  key: 'main',
  storage,
};
const persistedMainReducer = persistReducer(persistMainConfig, mainReducer);

//! ****************************

export const store = configureStore({
  reducer: {
    // modal: modalReducer,
    main: persistedMainReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);