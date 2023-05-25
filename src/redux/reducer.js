import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // Tempat menuliskan reducer kita
        // Adding todos
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },

        // Remove todo 
        removeTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }

})

export const {
    addTodos
} = addTodoReducer.action;

export const reducer = addTodoReducer.reducer;