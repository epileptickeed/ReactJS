import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import sort from './slices/sortSlice'
import popUp from './slices/popUpSlice'

export const store = configureStore({
  reducer: {
    filter,
    sort,
    popUp,
  },
})