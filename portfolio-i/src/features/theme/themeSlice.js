import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    theme: {
        light: {hbgc: 'rgb(194, 194, 194)',htc: 'rgb(17, 17, 17)',bbgc: 'rgb(221, 220, 220)',btc: 'rgb(29, 29, 29)'},
        dark: {hbgc: 'rgb(17, 17, 17)',htc: 'rgb(194, 194, 194)',bbgc: 'rgb(29, 29, 29)',btc: 'rgb(221, 220, 220)'},
    },
    isLightTheme: true,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeSwitcher: state => {
            state.isLightTheme = !state.isLightTheme
        }
    }
})

export const selectTheme = state => state.theme.theme 
export const selectIsLightTheme = state => state.theme.isLightTheme 
export const {themeSwitcher} = themeSlice.actions

export default themeSlice.reducer