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
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        // Update Todo 
        updateTodos: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    }
                    return todo;
                }
            })
        }
    }

})

export const {
    addTodos,
    removeTodos,
    updateTodos
} = addTodoReducer.action;

export const reducer = addTodoReducer.reducer;