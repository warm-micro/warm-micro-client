import { watchMyInfo } from '@/modules/myPage/utils/myInfo.saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(watchMyInfo);
}
