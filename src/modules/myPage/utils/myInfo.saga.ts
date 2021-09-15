import { MemberType } from '@/common/types/member.type';
import { tokenStore } from '@/common/utils/tokenStore';
import Router from 'next/router';
import { takeEvery, all, put } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { fetchMyInfoAPI } from './myInfo.api';
import myInfoReducer from './myInfo.slice';
import myInfoSlice from './myInfo.slice';

function* fetchMyInfoSaga() {
  try {
    if (tokenStore.get()) {
      const myInfoRes = yield * call(fetchMyInfoAPI);
      const myInfo: MemberType = {
        id: myInfoRes.body.id,
        userId: myInfoRes.body.username,
        name: myInfoRes.body.nickname,
        email: myInfoRes.body.email,
        phoneNumber: myInfoRes.body.phoneNumber,
        url:
          myInfoRes.body.nickname == 'Hyewon Kwak'
            ? '/images/hyewon.jpg'
            : myInfoRes.body.nickname == 'Jinho Jeong'
            ? '/images/jinho.png'
            : '/images/eom.png',
        active: true,
      };
      yield put(myInfoReducer.actions.fetchMyInfoSuccess(myInfo));
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
