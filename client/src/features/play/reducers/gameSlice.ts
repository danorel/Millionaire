import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../../app/store"
import { fetchConfig } from "../api/gameAPI"

import { Config } from "MyModels"

export interface GameState {
    error: any
    status: "idle" | "loading" | "success" | "failed"
    config: Config
}

const initialState: GameState = {
    config: { options: [], prizes: [] },
    error: null,
    status: "idle"
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchConfigAsync = createAsyncThunk(
    "game/fetchConfig",
    async () => {
        const response = await fetchConfig()
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConfigAsync.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchConfigAsync.fulfilled, (state, action) => {
                state.status = "success"
                // Add any fetched posts to the array
                state.config = action.payload
            })
            .addCase(fetchConfigAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectConfig = (state: RootState) => state.game.config
export const selectPrizes = (state: RootState) => state.game.config.prizes
export const selectStatus = (state: RootState) => state.game.status
export const selectAnswersByIndex = (state: RootState, index: number) =>
    state.game.config.options.length
        ? state.game.config.options[index].answers
        : []
export const selectQuestionByIndex = (state: RootState, index: number) =>
    state.game.config.options.length
        ? state.game.config.options[index].question
        : ""

export default gameSlice.reducer
