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
    }

})

export const {
    addTodos,
} = addTodoReducer.action;

export const reducer = addTodoReducer.reducer;