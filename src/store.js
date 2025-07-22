import { configureStore } from "@reduxjs/toolkit";

import toDoReducer from "./features/to-do/to-do-slice";

export const store = configureStore({
  reducer: toDoReducer,
});
