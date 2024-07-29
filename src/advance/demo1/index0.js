// 历史写法
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text, id: nanoid() },
})

export const todoToggled = (id) => ({
    type: TODO_TOGGLED,
    payload: { id },
})

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            })
        case TODO_TOGGLED:
            return state.map((todo) => {
                if (todo.id !== action.payload.id) return todo

                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })
        default:
            return state
    }
}

// 现在写法

// rtk
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            })
        },
        todoToggled(state, action) {
            const todo = state.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed
        },
    },
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer