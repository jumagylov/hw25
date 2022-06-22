import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";



const store = configureStore({
    reducer: {
        user: uiSlice.reducer,
    }
})

export default store