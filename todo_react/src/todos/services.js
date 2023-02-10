import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    //her ikisi duzdu axios daha effektivdir.
    //const res = await fetch('http://localhost:7000/todos');
    //return await res.json();
     const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
     return res.data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async(data) => {
    const res = await axios( `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data );
    return res.data;
});

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodoAsync', async({ id, data }) => {
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, data);
    return res.data;
});

export const removeTodoAsync = createAsyncThunk('todos/removeTodoAsync', async(id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);
    return res.data;
});