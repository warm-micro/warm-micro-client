import { RootState } from '@/app/rootReducer';
import { MemberType } from '@/common/types/member.type';
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type myInfoType = {
  loading: boolean;
  error?: string;
  myInfo: MemberType;
};

const myInfoReducer = createSlice({
  name: 'myInfo',
  initialState: {
    loading: false,
    error: undefined,
    myInfo: {
      id: 0,
      userId: '',
      name: '',
      email: '',
      url: '',
      phoneNumber: '',
      active: false,
      workspaceList: [],
    },
  } as myInfoType,
  reducers: {
    fetchMyInfoStart: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchMyInfoSuccess: (state, action: PayloadAction<MemberType>) => {
      state.myInfo = { ...action.payload };
      state.loading = false;
      state.error = undefined;
    },
    fetchMyInfoError: (state) => {
      state.error = 'fetch my info error';
    },
  },
});

export default myInfoReducer;

export const selectMyInfo = (state: RootState) => state.myInfoReducer;
