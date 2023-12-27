//import {SHOW_MODAL, HIDE_MODAL, LOGIN, LOGOUT} from '../actions';
import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        modalVisible: false,
        auth: {
            isAuthenticated: false,
            username: ''
        }
    },
    reducers: {
        show_modal: (state) => {
            return {
                ...state,
                modalVisible: true
            };
        },
        hide_modal: (state) => {
            return {
                ...state,
                modalVisible: false
            };
        },
        login: (state) => {
            return {
                ...state,
                modalVisible: false,
                auth: {
                    isAuthenticated: true,
                    username: action.payload
                }
            }
        },
        logout: (state) => {
            return {
                ...state,
                auth: {
                    isAuthenticated: false,
                    username: ''
                }
            };
        }
    }
})

export const { show_modal, hide_modal, login, logout } = loginSlice.actions

export default loginSlice.reducer