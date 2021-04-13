import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import playReducer from "../features/play/reducers/playSlice"
import actionReducer from "../features/play/reducers/actionSlice"

export const store = configureStore({
    reducer: {
        play: playReducer,
        action: actionReducer
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
