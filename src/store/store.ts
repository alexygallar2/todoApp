import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todoSlice'
import filtersReducer from '../features/filters/filtersSlice'

const syncToLocalStorageMiddleware = (state:any) => (next:any) => (action:any) => {
  const result = next(action)
  localStorage.setItem('filters', state.getState().filters)
  localStorage.setItem('todos', JSON.stringify(state.getState().todos))
  return result
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(syncToLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch