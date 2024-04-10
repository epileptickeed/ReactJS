import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popUpState: false
}

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setPopUp(state, action) {
            state.popUp = action.payload
        }
    }
})

export const { setPopUp } = popUpSlice.actions

export default popUpSlice.reducer