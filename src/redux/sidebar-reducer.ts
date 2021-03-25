import { UserSidebarType } from '../components/Sidebar/SidebarContainer';
import { usersApi } from './../api/users-api';
import { UserType } from './../type/type';
import { BaseThunkType, InferActionType } from "./redux-store"

export let initialState = {

  friends: [] as Array<UserSidebarType>
}

export const sidebarReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    
    case 'SN/SIDEBAR/GET_FOLLOW_FRIENDS':
      
      return {
        ...state,
        friends: action.friends
      }
    default :
      return state
  }
}
export const action = {
  setFollowUsers: (friends: Array<UserType>) => ({ type: 'SN/SIDEBAR/GET_FOLLOW_FRIENDS', friends } as const)
}

export const getMyFollowUsers = (friends: Array<UserSidebarType>): ThunkType => async(dispatch) => {
  let data = await usersApi.getMyFollowUsers()
 
  dispatch(action.setFollowUsers(data.items)) 
}




export default sidebarReducer



type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof action>
export type ThunkType = BaseThunkType<ActionType>