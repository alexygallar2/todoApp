import { createSlice } from '@reduxjs/toolkit'

export type Todo = {
    id: string
    text: string
    completed: boolean
}

const initialState: Todo[] = (() => {
  const storedTodos = localStorage.getItem('todos')
  return storedTodos ? JSON.parse(storedTodos) : []
})()

const todosSlice = createSlice({
  name: 'todos',
  initialState,
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
        if (todo) todo.completed = !todo.completed
    },
    todoDelete(state, action) {
        const todos = state.filter((todo) => todo.id !== action.payload)
        return todos
    },
    todoDeleteAllCompleted(state) {
        return state.filter(todo => !todo.completed)
    }
  },
})

export const { todoAdded, todoToggled, todoDelete, todoDeleteAllCompleted } = todosSlice.actions
export default todosSlice.reducer