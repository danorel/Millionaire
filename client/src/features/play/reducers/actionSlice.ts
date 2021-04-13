import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../../app/store"
import { fetchAction } from "../api/actionAPI"

import { ButtonIndex } from "MyModels"

export interface ActionState {
    finish: boolean
    status: "idle" | "loading" | "success" | "failed"
    correct: boolean
    indexLoading: -1 | ButtonIndex
    indexCorrect: -1 | ButtonIndex
    error: any
}

const initialState: ActionState = {
    finish: false,
    correct: false,
    indexCorrect: -1,
    indexLoading: -1,
    status: "idle",
    error: null
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchActionAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchActionAsync = createAsyncThunk(
    "play/fetchAction",
    async (index: ButtonIndex) => {
        const response = await fetchAction(index)
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const actionSlice = createSlice({
    name: "action",
    initialState,
    reducers: {
        setLoadingIndex: (state, action: PayloadAction<ButtonIndex>) => {
            state.indexLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActionAsync.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchActionAsync.fulfilled, (state, action) => {
                state.status = "success"
                // Add any fetched posts to the array
                state.correct = action.payload.correct
                state.indexLoading = -1
                state.indexCorrect = action.payload.indexCorrect
                state.finish = !action.payload.correct
            })
            .addCase(fetchActionAsync.rejected, (state, action) => {
                state.status = "failed"
                state.finish = true
                state.error = action.error.message
            })
    }
})

export const { setLoadingIndex } = actionSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.action.finish)`
export const selectFinish = (state: RootState) => state.action.finish
export const selectStatus = (state: RootState) => state.action.status

export const selectCorrect = (state: RootState) => state.action.correct
export const selectIndexCorrect = (state: RootState) =>
    state.action.indexCorrect
export const selectIndexLoading = (state: RootState) =>
    state.action.indexLoading

export default actionSlice.reducer
