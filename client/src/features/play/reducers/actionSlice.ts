import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../../app/store"
import { fetchAction } from "../api/actionAPI"

import { ButtonIndex } from "MyModels"

export interface ActionState {
    step: number
    finish: boolean
    status: "idle" | "loading" | "success" | "failed"
    success: boolean
    indexFail: -1 | ButtonIndex
    indexLoading: -1 | ButtonIndex
    indexCorrect: -1 | ButtonIndex
    error: any
}

const initialState: ActionState = {
    step: 0,
    finish: false,
    success: false,
    indexFail: -1,
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
        setDefaultIndex: (state) => {
            state.indexFail = -1
            state.indexCorrect = -1
            state.indexLoading = -1
        },
        setIncrementStep: (state) => {
            state.step = state.step + 1
        },
        setLoadingIndex: (state, action: PayloadAction<ButtonIndex>) => {
            state.success = false
            state.indexFail = -1
            state.indexCorrect = -1
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
                state.success = action.payload.success
                state.indexFail = !action.payload.success
                    ? state.indexLoading
                    : -1
                state.indexLoading = -1
                state.indexCorrect = action.payload.indexCorrect
                state.finish = !action.payload.success
            })
            .addCase(fetchActionAsync.rejected, (state, action) => {
                state.status = "failed"
                state.finish = true
                state.error = action.error.message
            })
    }
})

export const {
    setDefaultIndex,
    setIncrementStep,
    setLoadingIndex
} = actionSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.action.finish)`
export const selectStep = (state: RootState) => state.action.step

export const selectFinish = (state: RootState) => state.action.finish
export const selectStatus = (state: RootState) => state.action.status

export const selectSuccess = (state: RootState) => state.action.success
export const selectIndexFail = (state: RootState) => state.action.indexFail
export const selectIndexCorrect = (state: RootState) =>
    state.action.indexCorrect
export const selectIndexLoading = (state: RootState) =>
    state.action.indexLoading

export default actionSlice.reducer