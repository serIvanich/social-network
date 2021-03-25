import { getAuthUserData } from './auth-reducer'
import { BaseThunkType, InferActionType } from './redux-store'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':

            return { ...state, initialized: action.initialized }

        default:
            return state
    }
}

const action = {
    setInitialized: (initialized: boolean) => ({ type: 'SN/APP/INITIALIZED_SUCCESS', initialized } as const)
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(action.setInitialized(true))
}

export default appReducer

type InitialStateType = typeof initialState

type ActionType = InferActionType<typeof action>
type ThunkType = BaseThunkType<ActionType>
