import { RootState } from '@/app/rootReducer';
import { ChatType } from '@/common/types/chat.type';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardListType {
  loading: boolean;
  error?: string;
  cardList: ChatType[];
}

const cardReducer = createSlice({
  name: 'sprint',
  initialState: {
    loading: false,
    error: undefined,
    cardList: [],
  } as CardListType,
  reducers: {
    fetchCardListStart: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    fetchCardListSuccess: (state, action: PayloadAction<ChatType[]>) => {
      state.cardList = [...action.payload];
      state.loading = false;
      state.error = undefined;
    },
    createCardStart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = undefined;
    },
    createCardSuccess: (state, action: PayloadAction<SprintElementType>) => {
      const result = action.payload;
      result.order = state.sprintList.length;
      state.sprintList.push(result);
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
      if (
        action.payload.element.status === SprintStatusEnum.CURRENT &&
        state.sprintList.length - 1 > index
      ) {
        state.sprintList[index + 1] = {
          ...state.sprintList[index + 1],
          status: SprintStatusEnum.CURRENT,
        };
      }
      console.log(state.sprintList, index, '??');
      state.sprintList[index] = {
        ...action.payload.element,
        status: action.payload.status,
      };
    },
  },
});

export default cardReducer;
