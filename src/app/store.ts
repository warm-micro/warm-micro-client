/* eslint-disable no-undef */
import { Action, configureStore, Store, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';
import { createWrapper, Context, HYDRATE, MakeStore } from 'next-redux-wrapper';

const createStore: MakeStore<Store> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store>(createStore, { debug: true });
