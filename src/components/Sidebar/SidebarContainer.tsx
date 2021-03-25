import React, { FC, useEffect } from 'react'
import Sidebar from './Sidebar'
import { getMyFollowUsers, ThunkType } from "../../redux/sidebar-reducer"
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { UserType, PhotosType } from '../../type/type'
import { compose } from 'redux'




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    
    return {
        friends: state.sidebar.friends
    }
}


const SidebarContainer: FC<PropsType> = (props) => {
    useEffect(() => {
        
        props.getMyFollowUsers(props.friends)
    }, [])
    return <Sidebar friends={props.friends}/>
}

 

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getMyFollowUsers}))
    (SidebarContainer)

type MapStatePropsType = {
    friends: Array<UserSidebarType>
}
type MapDispatchPropsType = {
    getMyFollowUsers: (friends: Array<UserSidebarType>) => ThunkType
}
type PropsType = MapStatePropsType & MapDispatchPropsType
export type UserSidebarType = {
        id: number
        name: string
        status: string
        photos: PhotosType
}