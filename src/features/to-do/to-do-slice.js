import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "Hello World" }] };

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(toDo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
