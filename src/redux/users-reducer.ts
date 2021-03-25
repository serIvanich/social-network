import {BaseThunkType, InferActionType} from './redux-store'
import {usersApi} from "../api/users-api"
import {DispatchType, UserType} from "../type/type"
import {updateObjectInArray} from '../utils/object-helpers'
import {ApiResponseType} from '../api/api'

export let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users id
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })

            }

        case 'SN/USERS/UNFOLLOW':

            return {

                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case 'SN/USERS/SET_USERS':
            return { ...state, users: action.users }

        case 'SN/USERS/SET_CURRENT_PAGE':
            return { ...state, currentPage: action.page }

        case 'SN/USERS/SET_USERS_SEARCH_FILTER':
            return { ...state, filter: action.payload }

        case 'SN/USERS/SET_USERS_TOTAL_COUNT':
            return { ...state, totalUsersCount: action.count }

        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }

        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state

    }
}


export const action = {

    getFollow: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),

    getUnfollow: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),

    setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),

    setCurrentPage: (page: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', page } as const),

    setUsersSearchFilter: (filter: UsersSearchFilterType) => ({ type: 'SN/USERS/SET_USERS_SEARCH_FILTER', payload: filter} as const),

    setUsersTotalCount: (count: number) => ({ type: 'SN/USERS/SET_USERS_TOTAL_COUNT', count } as const),

    toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const),

    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => (
        { type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
}

export const requestUsers = (pageSize: number, currentPage: number, filter: UsersSearchFilterType  ): ThunkType => async (dispatch) => {

    dispatch(action.toggleIsFetching(true))
    dispatch(action.setCurrentPage(currentPage as number))
    dispatch(action.setUsersSearchFilter(filter))

    let data = await usersApi.getUsers(pageSize, currentPage, filter.term, filter.friend)

    dispatch(action.toggleIsFetching(false))
    dispatch(action.setUsers(data.items))
    dispatch(action.setUsersTotalCount(data.totalCount))
    console.log(initialState.filter)
}

const _followUnfollowFlow = async (dispatch: DispatchType<ActionType>,
                                    userId: number,
                                    actionCreator: (userId: number) => ActionType, apiMethod: (userId: number) => Promise<ApiResponseType>) => {
    dispatch(action.toggleIsFollowingProgress(true, userId))
    dispatch(action.toggleIsFetching(true))
    let data = await apiMethod(userId)
    dispatch(action.toggleIsFetching(false))
    dispatch(action.toggleIsFollowingProgress(false, userId))
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersApi.getUnfollow.bind(usersApi)
        let actionCreator = action.getUnfollow

        _followUnfollowFlow(dispatch, userId, actionCreator, apiMethod)
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersApi.getFollow.bind(usersApi)
        let actionCreator = action.getFollow
        _followUnfollowFlow(dispatch, userId, actionCreator, apiMethod)

    }
}
export default usersReducer

type InitialStateType = typeof initialState
export type UsersSearchFilterType = typeof initialState.filter
type ActionType = InferActionType<typeof action>
type ThunkType = BaseThunkType<ActionType>