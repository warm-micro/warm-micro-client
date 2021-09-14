import { MemberType } from '@/common/types/member.type';
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
      const { body } = yield * call(fetchUserInfoAPI);
      const myInfo: MemberType = {
        id: body.id,
        userId: body.username,
        name: body.nickname,
        email: body.email,
        phoneNumber: body.phoneNumber,
        url:
          body.nickname == 'Hyewon Kwak'
            ? '/images/hyewon.jpg'
            : body.nickname == 'Jinho Jeong'
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
