import { watchMyInfo } from '@/modules/myPage/utils/myInfo.saga';
import { watchWorkspace } from '@/modules/workspace/utils/workspace.saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(watchMyInfo);
  yield fork(watchWorkspace);
}
