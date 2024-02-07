import { createSlice } from '@reduxjs/toolkit'
import * as Action from './auth.action'
import { AuthState } from './types'

const initialState: AuthState = {
  isAuthored: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: { ...Action },
})

export const { setUserAuthored } = authSlice.actions
export const authReducer = authSlice.reducer
