import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth.store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: { auth: authReducer },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatcher = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatcher>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
