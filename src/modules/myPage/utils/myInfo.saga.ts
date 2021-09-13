import { tokenStore } from '@/common/utils/tokenStore';
import Router from 'next/router';
import { takeEvery, all, put } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { fetchUserInfoAPI } from './myInfo.api';
import myInfoReducer from './myInfo.slice';
import myInfoSlice from './myInfo.slice';

function* fetchMyInfoSaga() {
  try {
    if (tokenStore.get()) {
      const myInfo = yield* call(fetchUserInfoAPI);
      yield put(
        myInfoReducer.actions.fetchMyInfoSuccess({
          id: myInfo.username,
          name: myInfo.nickname,
          email: myInfo.email,
          phoneNumber: myInfo.phoneNumber,
          url:
            myInfo.nickname == 'Hyewon Kwak'
              ? '/images/hyewon.jpg'
              : myInfo.nickname == 'Jinho Jeong'
              ? '/images/jinho.png'
              : '/images/eom.png',
          active: true,
        })
      );
    } else {
      yield call(Router.push, '/login');
    }
  } catch (err) {
    yield put(myInfoReducer.actions.fetchMyInfoError());
  }
}
export function* watchMyInfo() {
  yield all([takeEvery(myInfoReducer.actions.fetchMyInfoStart.type, fetchMyInfoSaga)]);
}
