import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/UserSlice'

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
