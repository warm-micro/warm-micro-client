import { RootState } from '@/app/rootReducer';
import { MemberType } from '@/common/types/member.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkspaceListType {
  loading: boolean;
  error?: string;
  workspaceList: WorkspaceType[];
  currentWorkspaceId: number | null;
  memberList: MemberType[];
}

const workspaceReducer = createSlice({
  name: 'workspace',
  initialState: {
    loading: false,
    error: undefined,
    workspaceList: [],
    currentWorkspaceId: null,
    memberList: [],
  } as WorkspaceListType,
  reducers: {
    fetchWorkspaceListStart: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchWorkspaceListSuccess: (state, action: PayloadAction<WorkspaceType[]>) => {
      state.workspaceList = [...action.payload];
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
    setCurrentWorkspace: (state, action: PayloadAction<number>) => {
      state.currentWorkspaceId = action.payload;
      console.log('set!!', action.payload);
    },
    fetchMemberListStart: (state) =>  {
      state.loading = true;
    },
    fetchMemberListSuccess: (state, action: PayloadAction<MemberType[]>) => {
      state.loading = false;
      state.memberList = [...action.payload];
      console.log(state.memberList);
    },
    joinWorkspaceStart:(state, action:PayloadAction<string>)=>{
      state.loading = true;
    },
    joinWorkspaceSuccess: (state)=>{
      state.loading = false;
    }
  },
});

export default workspaceReducer;

export const selectWorkspaceList = (state: RootState) =>
  state.workspaceReducer.workspaceList;

export const selectWorkspaceById = (state: RootState, workspaceId: number) =>
  state.workspaceReducer.workspaceList.find((workspace) => workspace.id === workspaceId);
export const selectCurrentWorkspace = (state: RootState) =>
  state.workspaceReducer.workspaceList.find(
    (workspace) => workspace.id === state.workspaceReducer.currentWorkspaceId
  );
export const selectCurrentWorkspaceId = (state: RootState) =>
  state.workspaceReducer.currentWorkspaceId;

export const selectMemberList = (state:RootState) => state.workspaceReducer.memberList;
export const selectMemberById = (state: RootState, memberId: number) =>
  state.workspaceReducer.memberList.find((member) => member.id === memberId);

export const selectCurrentWorkspaceCode = (state: RootState) =>
  state.workspaceReducer.workspaceList.find(
    (workspace) => workspace.id === state.workspaceReducer.currentWorkspaceId
  )?.code;