import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import gameReducer from "../features/play/reducers/gameSlice"
import actionReducer from "../features/play/reducers/actionSlice"

export const store = configureStore({
    reducer: {
        game: gameReducer,
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
