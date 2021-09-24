import { RootState } from '@/app/rootReducer';
import { ChatType } from '@/common/types/chat.type';
import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { WorkspaceType } from '@/common/types/workspace.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateCardResponse } from './card.interface';

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
    createCardStart: (state, action: PayloadAction<CreateCardResponse>) => {
      state.loading = true;
      state.error = undefined;
    },
    createCardSuccess: (state, action: PayloadAction<ChatType>) => {
      state.loading = false;
    },
    deleteCardStart: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    deleteCardSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.cardList = state.cardList.filter((card) => card.id !== action.payload);
    },
    changeToCardStart: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    changeToCardSuccess: (state, action: PayloadAction<number>) => {
      state.cardList.filter(card => card.id === action.payload)[0].isCard = !state.cardList.filter(card => card.id === action.payload)[0].isCard ;
    },
  },
});

export default cardReducer;
