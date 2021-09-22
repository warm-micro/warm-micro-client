import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { MemberType } from '@/common/types/member.type';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { tokenStore } from '@/common/utils/tokenStore';
import { fetchUserInfoAPI } from '@/modules/myPage/utils/myInfo.api';
import { selectMyInfo } from '@/modules/myPage/utils/myInfo.slice';
import { selectCurrentWorkspaceId } from '@/modules/workspace/utils/workspace.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import { takeEvery, all, put } from 'redux-saga/effects';
import { select, takeLatest, call } from 'typed-redux-saga';
import { fetchSprintListAPI, createSprintAPI } from './sprint.api';
import sprintReducer, { selectSprintList } from './sprint.slice';

function* fetchSprintListSaga() {
  try {
    const workspaceId = yield* select(selectCurrentWorkspaceId);
    if (workspaceId) {
      const res = yield* call(fetchSprintListAPI, workspaceId);
      const sprintList: SprintElementType[] = res.body.map((sprint, index) => {
        return {
          id: sprint.ID,
          order: index,
          title: sprint.Name,
          status: sprint.Status,
          workspaceId: sprint.WorkspaceId,
        };
      });
      yield put(sprintReducer.actions.fetchSprintListSuccess(sprintList));
    } else {
      yield call(Router.push, '/myPage');
    }
  } catch (err) {
    yield put(sprintReducer.actions.fetchSprintListError());
  }
}
function* createSprintSaga(action: PayloadAction<string>) {
  try {
    const workspaceId = yield* select(selectCurrentWorkspaceId);
    const sprintList = yield * select(selectSprintList);
    if (workspaceId) {
      const status =  sprintList.length === 0 ?
        SprintStatusEnum.CURRENT : SprintStatusEnum.READY;
      const { body } = yield* call(createSprintAPI, workspaceId, action.payload, status);
      const newSprint = {
        id: body.ID,
        order: 0,
        title: body.Name,
        status: body.Status,
        workspaceId: body.WorkspaceId,
      };
      yield put(sprintReducer.actions.createSprintSuccess(newSprint));
    } else {
      console.log('no workspaceId');
    }
  } catch (error) {
    yield put(sprintReducer.actions.createSprintError());
  }
}
function* deleteSprintSaga(action: PayloadAction<string>) {
  try {
    const workspaceId = yield* select(selectCurrentWorkspaceId);
    const sprintList = yield* select(selectSprintList);
    if (workspaceId) {
      const status =
        sprintList.length === 0 ? SprintStatusEnum.CURRENT : SprintStatusEnum.READY;
      const { body } = yield* call(createSprintAPI, workspaceId, action.payload, status);
      const newSprint = {
        id: body.ID,
        order: 0,
        title: body.Name,
        status: body.Status,
        workspaceId: body.WorkspaceId,
      };
      yield put(sprintReducer.actions.createSprintSuccess(newSprint));
    } else {
      console.log('no workspaceId');
    }
  } catch (error) {
    yield put(sprintReducer.actions.createSprintError());
  }
}
export function* watchSprint() {
  yield all([
    takeEvery(sprintReducer.actions.fetchSprintListStart.type, fetchSprintListSaga),
    takeLatest(sprintReducer.actions.createSprintStart.type, createSprintSaga),
  ]);
}
