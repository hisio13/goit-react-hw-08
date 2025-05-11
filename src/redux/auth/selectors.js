import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default persistAuthConfig;
