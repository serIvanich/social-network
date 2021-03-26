import {ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api"
import { FormAction, stopSubmit } from "redux-form"
import { BaseThunkType, InferActionType } from "./redux-store"
import { authApi } from "../api/auth-api"
import { sequrityApi } from "../api/sequrity-api"

let inicialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

const authReducer = (state = inicialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SN/AUTH/SET-USER-DATA':
        case 'SN/AUTH/GET-CAPTCHA-URL':

            return {

                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

const action = {

    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
        return ({ type: 'SN/AUTH/SET-USER-DATA', payload: { userId, login, email, isAuth } })
    },

    getCaptchaUrlSuccess: (captchaUrl: string) => {
        return ({ type: 'SN/AUTH/GET-CAPTCHA-URL', payload: { captchaUrl } })
    },
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {

    let data = await authApi.me()
    if (data.resultCode === ResultCodeEnum.Success) {

        let { id, login, email } = data.data
        dispatch(action.setAuthUserData(id, login, email, true)
        )
    }

}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'some error'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

    const response = await sequrityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(action.getCaptchaUrlSuccess(captchaUrl)
    )
}

export const logout = (): ThunkType => async (dispatch) => {

    let data = await authApi.logout()
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(action.setAuthUserData(null, null, null, false))
    }
}

export default authReducer 

type InitialStateType = typeof inicialState
type ActionType = InferActionType<typeof action>
type ThunkType = BaseThunkType<ActionType | FormAction>