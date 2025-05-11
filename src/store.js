import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';
import persistAuthConfig from './auth/persistConfig';

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    contacts: contactsReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
