import { RootState } from '@/app/rootReducer';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeSprint } from './sprint.interface';

interface SprintListType {
  loading: boolean;
  error?: string;
  sprintList: SprintElementType[];
}



const sprintReducer = createSlice({
  name: 'sprint',
  initialState: {
    loading: false,
    error: undefined,
    sprintList: [],
  } as SprintListType,
  reducers: {
    fetchSprintListStart: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchSprintListSuccess: (state, action: PayloadAction<SprintElementType[]>) => {
      state.sprintList = [...action.payload];
      state.loading = false;
      state.error = undefined;
    },
    fetchSprintListError: (state) => {
      state.error = 'fetch sprintList error';
    },
    createSprintStart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = undefined;
    },
    createSprintSuccess: (state, action: PayloadAction<SprintElementType>) => {
      const result = action.payload;
      result.order = state.sprintList.length;
      state.sprintList.push(result);
    },
    createSprintError: (state) => {
      state.error = 'create sprint error';
    },
    deleteSprintStart: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    deleteSprintSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.sprintList = state.sprintList.filter(
        (sprint) => sprint.id !== action.payload
      );
      state.sprintList.map((sprint, index) => (sprint.order = index));
    },
    changeSprintStatusStart: (state, action: PayloadAction<changeSprint>) => {
        state.loading = true;
    },
    changeSprintStatusSuccess: (state, action: PayloadAction<changeSprint>) => {
      state.loading = false;
      const index = action.payload.element.order;
      if(action.payload.element.status === SprintStatusEnum.CURRENT && state.sprintList.length-1 > index){
        state.sprintList[index+1] = {...state.sprintList[index+1], status: SprintStatusEnum.CURRENT};
      }
      console.log(state.sprintList, index, "??");
      state.sprintList[index] = {
        ...action.payload.element,
        status: action.payload.status,
      };
      
    },
  },
});

export default sprintReducer;

export const selectSprintList = (state: RootState) => state.sprintReducer.sprintList;
export const selectSprintById = (state: RootState, sprintId: number) =>
  state.sprintReducer.sprintList.find((sprint) => sprint.id === sprintId);
export const selectCurrentSprint = (state: RootState) =>
  state.sprintReducer.sprintList.filter(
    (sprint) => sprint.status === SprintStatusEnum.CURRENT
  )[0];
export const selectFinishSprint = (state: RootState) =>
  state.sprintReducer.sprintList.filter(
    (sprint) => sprint.status === SprintStatusEnum.FINISH
  )[0];

export const selectNotFinishedSprintLength = (state: RootState) => state.sprintReducer.sprintList.filter(sprint => sprint.status !== SprintStatusEnum.FINISH).length;