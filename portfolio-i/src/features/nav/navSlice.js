import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLightMode: true,
    theme: {
        light: {hbgc: 'rgb(206, 206, 206)',htc: 'rgb(19, 19, 19)',hbordc: 'rgb(108, 108, 108)',bbc: 'rgb(225, 225, 225)',btc: 'rgb(8, 8, 8)',bbordc: 'rgb(25, 25, 25)'},
        dark: {hbgc: 'rgb(6, 6, 6)',htc: 'rgb(165, 165, 165)',hbordc: 'rgb(108, 108, 108)',bbc: 'rgb(27, 27, 27)',btc: 'rgb(233, 233, 233)',bbordc: 'rgb(154, 154, 154)'},
    }
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        switchTheme: state => {
            state.isLightMode = !state.isLightMode
        }
    }
})

export const selectIsLightMode = state => state.nav.isLightMode
export const selecteTheme = state => state.nav.theme
export const {switchTheme} = navSlice.actions

export default navSlice.reducer