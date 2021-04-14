import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../../app/store"
import { fetchConfig, fetchConfigMock } from "../api/gameAPI"

import { Config, ButtonIndex } from "MyModels"

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
        console.log(response)
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
export const selectStatus = (state: RootState) => state.game.status

export const selectQuestionByStep = (state: RootState, step: number) =>
    step < 0 || step >= state.game.config.options.length
        ? ""
        : state.game.config.options.length
        ? state.game.config.options[step].question
        : ""

/**
 * State answer selector.
 * - selectPrizes: Extracts all possible prizes fetched from the config.
 * - selectPrizeByStep: Extracts the prize by the step, which the user won.
 */
export const selectPrizes = (state: RootState) => state.game.config.prizes

export const selectPrizeByStep = (state: RootState, step: number) =>
    step < 0 || step >= state.game.config.prizes.length
        ? "$0"
        : state.game.config.prizes.length
        ? state.game.config.prizes[step]
        : "$0"

/**
 * State answer selector.
 * - selectAnswersByIndex: Extracts the answers by certain step.
 * - selectAnswerCorrectIndicesByStep: Extracts correct indices of answers by certain step.
 */
export const selectAnswersByStep = (state: RootState, step: number) =>
    step < 0 || step >= state.game.config.options.length
        ? []
        : state.game.config.options.length
        ? state.game.config.options[step].answers
        : []

export const selectAnswerCorrectIndicesByStep = (
    state: RootState,
    step: number
) =>
    selectAnswersByStep(state, step)
        // Answer[]
        // [{
        //     text: string
        //     correct: boolean
        // }]
        .map((answer, index: number) => {
            return { ...answer, index }
        })
        // Answer[]
        // [{
        //     index: number
        //     text: string
        //     correct: boolean
        // }]
        .filter((answer) => answer.correct)
        // number[]
        // [1, 3]
        .map((answer) => answer.index as ButtonIndex)

export default gameSlice.reducer
