import { createSelector } from 'reselect'
import { AppStateType } from './redux-store'

const getUserSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUser = createSelector (getUserSelector, (users) => {
    return users.filter(u => true)
}) 

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getUsersSearchFilter = (state: AppStateType) => {
    return state.usersPage.filter
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

