import {configureStore} from '@reduxjs/toolkit'

// reducers
import navReducer from '../features/nav/navSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})