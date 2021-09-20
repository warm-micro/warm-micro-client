import myInfoReducer from '@/modules/myPage/utils/myInfo.slice';
import sprintReducer from '@/modules/sprintList/utils/sprint.slice';
import workspaceReducer from '@/modules/workspace/utils/workspace.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  myInfoReducer: myInfoReducer.reducer,
  workspaceReducer: workspaceReducer.reducer,
  sprintReducer: sprintReducer.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

//https://redux-toolkit.js.org/usage/usage-with-typescript
export default rootReducer;
