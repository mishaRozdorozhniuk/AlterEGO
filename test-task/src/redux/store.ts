import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localForage from 'localforage';
import userReducer from './reducers/userIsAuth';

const persistConfig = {
  key: 'root',
  storage: localForage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true
});

export type IRootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
