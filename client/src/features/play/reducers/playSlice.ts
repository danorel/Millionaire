import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../../app/store"
import { fetchAnswers, fetchQuestion } from "../api/playAPI"

import { Answer, Question } from "MyModels"

export interface PlayState {
    answers: Answer[]
    question: Question
    error: any
    status: "idle" | "loading" | "success" | "failed"
}

const initialState: PlayState = {
    answers: [],
    question: "",
    error: null,
    status: "idle"
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAnswersAsync = createAsyncThunk(
    "play/fetchAnswers",
    async () => {
        const response = await fetchAnswers()
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const fetchQuestionAsync = createAsyncThunk(
    "play/fetchQuestion",
    async () => {
        const response = await fetchQuestion()
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const playSlice = createSlice({
    name: "play",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /*
             * Fetch Answers case.
             */
            .addCase(fetchAnswersAsync.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchAnswersAsync.fulfilled, (state, action) => {
                state.status = "success"
                // Add any fetched posts to the array
                state.answers = state.answers.concat(action.payload)
            })
            .addCase(fetchAnswersAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            /*
             * Fetch Question case.
             */
            .addCase(fetchQuestionAsync.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchQuestionAsync.fulfilled, (state, action) => {
                state.status = "success"
                // Add any fetched posts to the array
                state.question = action.payload
            })
            .addCase(fetchQuestionAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectQuestion = (state: RootState) => state.play.question
export const selectAnswers = (state: RootState) => state.play.answers
export const selectStatus = (state: RootState) => state.play.status

export default playSlice.reducer
