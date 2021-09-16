import { RootState } from '@/app/rootReducer';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkspaceListType {
  loading: boolean;
  error?: string;
  workspaceList: WorkspaceType[];
}

const workspaceReducer = createSlice({
  name: 'workspace',
  initialState: {
    loading: false,
    error: undefined,
    workspaceList: [],
  } as WorkspaceListType,
  reducers: {
    fetchWorkspaceListStart: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchWorkspaceListSuccess: (state, action: PayloadAction<WorkspaceType[]>) => {
      state.workspaceList = { ...action.payload };
      state.loading = false;
      state.error = undefined;
    },
    fetchWorkspaceListError: (state) => {
      state.error = 'fetch workspacelist error';
    },
    createWorkspaceStart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = undefined;
    },
    createWorkspaceSuccess: (state, action: PayloadAction<WorkspaceType>) => {
      state.workspaceList.push(action.payload);
    },
    createWorkspaceError: (state) => {
      state.error = 'create workspace error';
    },
  },
});

export default workspaceReducer;

export const selectMyInfo = (state: RootState) => state.workspaceReducer;
