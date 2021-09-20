import { RootState } from '@/app/rootReducer';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export default sprintReducer;

export const selectSprintList = (state: RootState) => state.sprintReducer.sprintList;
export const selectSprintById = (state: RootState, sprintId: number) =>
  state.sprintReducer.sprintList.find((sprint) => sprint.id === sprintId);
