import { FormAction } from 'redux-form';
import { stopSubmit } from 'redux-form';
import { ResultCodeEnum } from "../api/api"
import { profileApi } from "../api/profile-api"
import { PhotosType, PostType, ProfileType, PropertiesType } from "../type/type"
import { BaseThunkType, InferActionType } from "./redux-store"

let initialState = {
    posts: [
        { id: 1, likeCount: 14, message: 'Hi! The day is fine!' },
        { id: 2, likeCount: 15, message: 'Yes! You are right!' },
        { id: 3, likeCount: 19, message: 'But sametime verry hot' },
        { id: 4, likeCount: 9, message: 'Yes! You are right!' }
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: '',
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newPost = {
                id: 5,
                likeCount: 0,
                message: action.message,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }

        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.userId)
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SECCUSS': {
            debugger
            return {
                ...state, profile: {...state.profile, photos: action.photos } as ProfileType
            }
        }

        default:
            return state
    }
}

export const action = {

    addPost: (message: string) => ({ type: 'SN/PROFILE/ADD_POST', message } as const ),


    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const ),


    setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const ),


    deletePost: (userId: number) => ({ type: 'SN/PROFILE/DELETE_POST', userId } as const ),


    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SECCUSS', photos } as const ),

}

export const getUserProfile = (userId: number ): ThunkType => async (dispatch) => {
    let response = await profileApi.getProfileUser(userId)
    dispatch(action.setUserProfile(response))

}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getStatus(userId)
    dispatch(action.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileApi.updateStatus(status)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(action.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    debugger
    let data = await profileApi.savePhoto(file)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(action.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    
    let userId = getState().auth.userId
    let data = await profileApi.saveProfile(profile)

    if (data.resultCode === ResultCodeEnum.Success) {
        if (userId != null){
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId not can't be null")}
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer

type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof action>
type ThunkType = BaseThunkType<ActionType | FormAction>