import { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../types'

export function setUserAuthored(
  state: AuthState,
  action: PayloadAction<boolean>
) {
  state.isAuthored = action.payload
}
