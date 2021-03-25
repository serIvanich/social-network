import React, { FC } from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls"
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'
import {ContactsType, GetFormValuesKeys, ProfileType} from '../../../type/type'


const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormOwnType> & ProfileDataFormOwnType> = ({handleSubmit, profile, error}) => { 
    
    return <form onSubmit={handleSubmit}>
        <div><button > save </button></div>
        {error && <div><button className={style.formSummaryError}>{error}</button></div>}
        <div>
            <b>about me:</b> {createField<ProfileDataFormValueTypeKeys>("about me", "aboutMe", [], Textarea) }
        </div>
        <div>
            <b>my full name:</b> {createField<ProfileDataFormValueTypeKeys>("full name", "fullName", [], Input) }
        </div>
        <div>
            <b>looking for a job:</b> {createField<ProfileDataFormValueTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        
        <div>
            <b>my skills:</b> {createField<ProfileDataFormValueTypeKeys>("my skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        
        <div>
            <b>contacts:</b> {
            Object
                .keys(profile.contacts)
                .map(key => {
            return <div key={key} className={s.contact}> 
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)} </div>})}

        </div>
    </form>
    
  }

   

  const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormOwnType>({form: 'edit-profile'})(ProfileDataForm)
  
  export default ProfileDataFormReduxForm

  export type ProfileDataFormValueType = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
  }
  type ContactsTypeValueKeys = Extract<"contacts.github" | "contacts.vk" | "contacts.facebook" |
                                         "contacts.instagram" | "contacts.twitter" | "contacts.website" |
                                          "contacts.youtube" | "contacts.mainLink", string>
//   type ContactsTypeValueKeys = Extract<keyof ContactsType, string>
  type ProfileDataFormValueTypeKeys = GetFormValuesKeys<ProfileDataFormValueType>
  export type ProfileDataFormOwnType = {
      profile: ProfileType
  }