import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['isAuthored'],
}

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatcher = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatcher>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
