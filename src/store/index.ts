import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import newsReducer from './slice/newsSlice.ts'
import { newsApi } from './sevices/newsApi.ts'

export const store = configureStore({
	reducer: {
		news: newsReducer,
		[newsApi.reducerPath]: newsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
