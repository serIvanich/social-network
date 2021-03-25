import React from 'react'
import { ContactsType, ProfileType } from '../../../type/type'
import s from './ProfileInfo.module.css'

const ProfileData: React.FC<PropsType> = ({ profile, isOwner, goToEditMode }) => {
    return (<div>
  
      <div>
        <b>about me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>my full name:</b> {profile.fullName}
      </div>
      <div>
        <b>looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>my skills:</b> {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>contacts:</b> {
        Object
          .keys(profile.contacts)
          .map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        })}
      </div>
      {isOwner && <div><button onClick={goToEditMode}> edit </button></div>}
    </div>)
  
  }
  
  
  
  const Contact: React.FC<ContactsPropsType>= ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
  }

  export default ProfileData

  type PropsType = {
      profile: ProfileType 
      isOwner: boolean
      goToEditMode: () => void
      
  }
  type ContactsPropsType = {
    contactTitle: string
    contactValue: string | undefined
  } 
  