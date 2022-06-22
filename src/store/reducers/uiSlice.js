import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    password: null,
    spiner : false,
    
}

const uiSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers : {
        login (state, action) {
            localStorage.setItem('key', 1)
            state.email = action.payload.email
            state.password = action.payload.password   
        },
        setSpiner (state) {
            state.spiner = true

        },
        endSpiner (state) {
        state.spiner = false
        },
         existUser (state) {
            localStorage.removeItem('key')
            if(!localStorage.removeItem('key')) {
                state.email = ''
                state.password = ''
            }
         }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice


 export const FetchUser = (data) => {
    return (dispatch) => {
        dispatch(uiActions.setSpiner())
        setTimeout(() => {
            dispatch(uiActions.login(data))
            dispatch(uiActions.endSpiner())
        }, 2000) 
    }
}

export const Exist = () => {
    return (dispatch) => {
        dispatch(uiActions.setSpiner())
        setTimeout(() => {
            dispatch(uiActions.existUser())
            dispatch(uiActions.endSpiner())
        }, 2000) 
    }
}