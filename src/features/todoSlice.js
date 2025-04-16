import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; //creates random unique id everytime called

const initialState = {
  todos: [
    { id: 1122, text: "Just checking" },
    { id: 2233, text: "Done with redux" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const idx = state.todos.findIndex(
        (todo) => todo.id === action.payload.todoId
      );
      console.log(action.payload);
      if (idx === -1) {
        const todo = {
          id: nanoid(),
          text: action.payload.newTodo,
        };

        state.todos.push(todo);
      } else {
        state.todos[idx].text = action.payload.newTodo;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
