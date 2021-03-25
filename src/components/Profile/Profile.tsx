import React, { FC } from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../type/type'



const Profile: FC<ProfileComponentType> = (props) => {
    
    
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} 
            updateStatus={props.updateStatus} isOwner={props.isOwner} 
            savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
            <MyPostsContainer  />
        </div>)
}
export default Profile

export type ProfileComponentType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    isOwner: boolean
    // userPhoto: string
}