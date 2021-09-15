import { MemberType } from '@/common/types/member.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { tokenStore } from '@/common/utils/tokenStore';
import { fetchUserInfoAPI } from '@/modules/myPage/utils/myInfo.api';
import { selectMyInfo } from '@/modules/myPage/utils/myInfo.slice';
import Router from 'next/router';
import { takeEvery, all, put } from 'redux-saga/effects';
import { call, select, takeLatest } from 'typed-redux-saga';
import { fetchWorkspaceListAPI } from './workspace.api';
import workspaceReducer from './workspace.slice';

function* fetchWorkspaceListSaga() {
  try {
    if (tokenStore.get()) {
      const myInfo = yield* select(selectMyInfo);
      const workspaceRes = yield* call(fetchWorkspaceListAPI, myInfo.myInfo.id);
      const workspaceList: WorkspaceType[] = workspaceRes.body.map((workspace) => {
        return {
          id: workspace.ID,
          name: workspace.Name,
          sprintList: [],
          url: workspace.Name == 'warm-micro' ? '/images/warm.png' : '/images/linker.png',
          members: [],
          code: workspace.Code,
        };
      });
      console.log(workspaceList);
      yield put(workspaceReducer.actions.fetchWorkspaceListSuccess(workspaceList));
    } else {
      yield call(Router.push, '/login');
    }
  } catch (err) {
    yield put(workspaceReducer.actions.fetchWorkspaceListError());
  }
}
function* createWorkspaceSaga() {
  try {
  } catch (error) {
    yield put(workspaceReducer.actions.createWorkspaceError());
  }
}
export function* watchWorkspace() {
  yield all([
    takeEvery(
      workspaceReducer.actions.fetchWorkspaceListStart.type,
      fetchWorkspaceListSaga
    ),
    takeLatest(workspaceReducer.actions.createWorkspaceStart),
  ]);
}