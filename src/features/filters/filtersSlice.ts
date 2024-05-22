import { createSlice } from '@reduxjs/toolkit'

export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

const initialState: FilterValue = TODO_FILTERS.ACTIVE

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterValue,
  reducers: {
    changeFilter( state, action) {
        return action && action.payload ? action.payload : state 
    }
  },
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer