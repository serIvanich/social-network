import React, { ChangeEvent, useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preload/Preload'
import ProfileStatus from './ProfileStatusHook'
import ProfileDataForm, {ProfileDataFormValueType, ProfileDataFormOwnType} from './ProfileDataForm'
import {ProfileComponentType} from '../../Profile/Profile'
import ProfileData from './ProfileData'
import { ProfileType } from '../../../type/type'
import userPhoto from '../../../assets/images/images.jpg'

const ProfileInfo: React.FC<ProfileComponentType>= (props) => {
  let [editMode, setEditMode] = useState(false)
  let [imgForChange, setImgForChange] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }


  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    debugger
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0])
      forDeactive()
    }

  }
  const forActive = () => {

    setImgForChange(true)
  }

  const forDeactive = () => {
    debugger
    setImgForChange(false)
  }
  
  const onSubmit = (formData: ProfileType) => {

    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })

  }

  return (

    <div>
      <div className={s.pic}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTD_0HFgQ9KsHOm4FF55__N9ZsFgXHXB9JxDg&usqp=CAU' />
      </div>
      <div className={s.descriptionBlock}>

        <img title={'change'} onClick={forActive} src={props.profile.photos.small || props.profile.photos.large || userPhoto} className={s.userPhoto} />

        {imgForChange && <input type={'file'} onChange={onMainPhotoSelected} />}
        {props.isOwner && <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> ||
          <div className={s.status}>{props.status}</div>}


        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}


      </div>


    </div>)
}


export default ProfileInfo