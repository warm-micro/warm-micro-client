import { ChatType } from '@/common/types/chat.type';
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
import { fetchCardListAPI } from './card.api';
import cardReducer from './card.slice';

function* fetchCardListSaga() {
  try {
    if (Router.query.sprint) {
      const res = yield* call(
        fetchCardListAPI,
        parseInt(Router.query.sprint.toString())
      );
      yield put(cardReducer.actions.fetchCardListSuccess(res.body));
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
    const sprintList = yield* select(selectSprintList);
    if (workspaceId) {
      const status =
        sprintList.filter((sprint) => sprint.status !== SprintStatusEnum.FINISH)
          .length === 0
          ? SprintStatusEnum.CURRENT
          : SprintStatusEnum.READY;
      const { body } = yield* call(createSprintAPI, workspaceId, action.payload, status);
      const newSprint = {
        id: body.ID,
        order: sprintList.length,
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
function* deleteSprintSaga(action: PayloadAction<number>) {
  try {
    const currentSprint = yield* select(selectCurrentSprint);
    const { body } = yield* call(deleteSprintAPI, action.payload);
    yield put(sprintReducer.actions.deleteSprintSuccess(action.payload));
    console.log('??', currentSprint);
    Router.replace(
      '/workspace/[workspace]/sprint/[sprint]',
      `/workspace/${Router.query.workspace}/sprint/${currentSprint.id}`
    );
  } catch (error) {
    console.log('delete sprint error');
  }
}
function* changeSprintStatusSaga(action: PayloadAction<changeSprint>) {
  try {
    const { body } = yield* call(
      changeSprintAPI,
      action.payload.element.id,
      action.payload.status
    );
    yield put(sprintReducer.actions.changeSprintStatusSuccess(action.payload));
  } catch (error) {
    console.log('delete sprint error');
  }
}
export function* watchSprint() {
  yield all([
    takeEvery(sprintReducer.actions.fetchSprintListStart.type, fetchSprintListSaga),
    takeLatest(sprintReducer.actions.createSprintStart.type, createSprintSaga),
    takeLatest(sprintReducer.actions.deleteSprintStart.type, deleteSprintSaga),
    takeLatest(
      sprintReducer.actions.changeSprintStatusStart.type,
      changeSprintStatusSaga
    ),
  ]);
}
