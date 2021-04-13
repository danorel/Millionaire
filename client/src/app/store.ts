import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import playReducer from "../features/play/playSlice"

export const store = configureStore({
    reducer: {
        play: playReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
