import myInfoReducer from '@/modules/myPage/utils/myInfo.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  myInfoReducer: myInfoReducer.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

//https://redux-toolkit.js.org/usage/usage-with-typescript
export default rootReducer;
