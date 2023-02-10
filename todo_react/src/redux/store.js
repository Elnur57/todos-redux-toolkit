//npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../todos/todosSlice";

export const store = configureStore ({
    reducer: {
        todos: todosSlice,
    },
});