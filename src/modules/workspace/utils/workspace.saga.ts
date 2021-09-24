import { MemberType } from '@/common/types/member.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { tokenStore } from '@/common/utils/tokenStore';
import { fetchUserInfoAPI } from '@/modules/myPage/utils/myInfo.api';
import { selectMyInfo } from '@/modules/myPage/utils/myInfo.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import { takeEvery, all, put } from 'redux-saga/effects';
import { call, select, takeLatest } from 'typed-redux-saga';
import {
  createWorkspaceAPI,
  fetchMemberListAPI,
  fetchWorkspaceListAPI,
  joinWorkspaceAPI,
} from './workspace.api';
import workspaceReducer from './workspace.slice';

function* fetchWorkspaceListSaga() {
  try {
    if (tokenStore.get()) {
      const myInfo = yield * select(selectMyInfo);
      const workspaceRes = yield * call(fetchWorkspaceListAPI, myInfo.myInfo.id);
      const workspaceList: WorkspaceType[] = workspaceRes.body.map((workspace) => {
        return {
          id: workspace.Id,
          name: workspace.Name,
          sprintList: [],
          url: null,
          members: [],
          code: workspace.Code,
        };
      });
      yield put(workspaceReducer.actions.fetchWorkspaceListSuccess(workspaceList));
      if (Router.query.workspace) {
        yield put(
          workspaceReducer.actions.setCurrentWorkspace(
            parseInt(Router.query.workspace.toString())
          )
        );
      }
    } else {
      yield call(Router.push, '/login');
    }
  } catch (err) {
    yield put(workspaceReducer.actions.fetchWorkspaceListError());
  }
}
function* createWorkspaceSaga(action: PayloadAction<string>) {
  try {
    const { body } = yield * call(createWorkspaceAPI,  action.payload);
    const newWorkspace = {
      id: body.Id,
      name: body.Name,
      sprintList: [],
      url: body.Name == 'warm-micro' ? '/images/warm.png' : null,
      members: [],
      code: body.Code,
    };
    yield put(workspaceReducer.actions.createWorkspaceSuccess(newWorkspace));
  } catch (error) {
    yield put(workspaceReducer.actions.createWorkspaceError());
  }
}
function* fetchMemberListSaga() {
  try {
    if (Router.query.workspace) {
      const { body } = yield* call(
        fetchMemberListAPI,
        parseInt(Router.query.workspace?.toString())
      );
      const memberList: MemberType[] = body.Members.map((member) => {
        return {
          id: member.Id,
          userId: member.Username,
          name: member.Nickname,
          email: member.Email,
          phoneNumber: member.PhoneNumber,
          url: '',
          active: true,
        };
      });
      yield put(workspaceReducer.actions.fetchMemberListSuccess(memberList));
    } else {
      console.log('no workspace query');
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* joinWorkspaceSaga(action: PayloadAction<string>) {
  try {
    console.log(action.payload);
    const { body } = yield* call(joinWorkspaceAPI, action.payload);
    yield put(workspaceReducer.actions.fetchWorkspaceListStart());
  } catch (error) {
    console.log(error.message);
  }
}
export function* watchWorkspace() {
  yield all([
    takeEvery(
      workspaceReducer.actions.fetchWorkspaceListStart.type,
      fetchWorkspaceListSaga
    ),
    takeEvery(workspaceReducer.actions.fetchMemberListStart.type, fetchMemberListSaga),
    takeLatest(workspaceReducer.actions.createWorkspaceStart.type, createWorkspaceSaga),
    takeLatest(workspaceReducer.actions.joinWorkspaceStart.type, joinWorkspaceSaga),
  ]);
}
