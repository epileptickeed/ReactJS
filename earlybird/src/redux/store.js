import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/CartSlice'

export default configureStore({
  reducer: { counter: counterSlice },
})