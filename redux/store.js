import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"


const rootReducer = combineReducers({})

export const reduxStore = configureStore({
    reducer: rootReducer,
})

setupListeners(reduxStore.dispatch)