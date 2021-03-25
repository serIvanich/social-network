import React, { ChangeEvent, ComponentType, FC, PropsWithChildren, useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { ProfileType } from '../../type/type'
import { AppStateType } from '../../redux/redux-store'



const ProfileContainer: FC<ProfileContainerType & RouteComponentProps<PathParamsType>> = (props) => {
    
    useEffect(() => {
        let userId: number | null = +props.match.params.userId
        if (!userId) {
            userId = props.authorizedUserId
            if (!userId) {
                props.history.push('/login')
            }
        }

        if (!userId) {
            console.error('Id should exists in URL param or in state(authorizedUserId)')
        } else {
        props.getUserProfile(userId)
        props.getStatus(userId)
        }
    }, [props.match.params.userId])

    return <Profile {...props} profile={props.profile} saveProfile={props.saveProfile}
        status={props.status} updateStatus={props.updateStatus}
        isOwner={!props.match.params.userId} savePhoto={props.savePhoto} />
}




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,

    }
}

export default compose<React.ComponentType>(

    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile })
)
    (ProfileContainer)


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type ProfileOwnPropsType = {
    // userPhoto: string

}
type PathParamsType = {
    userId: string
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType & ProfileOwnPropsType 
