import React from 'react'
import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../../utils/validator/validator"
import { createField, Textarea } from "../../../common/FormsControls/FormsControls"


const maxLength15 = maxLengthCreator(15)

const PostForm: React.FC<InjectedFormProps<MyPostFormValueType, PropsType> & PropsType>= ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>                       
            { createField<MyPostFormValueTypeKeys>(undefined, 'message', [required, maxLength15], Textarea) }           
            <button >add post</button>
            
        
        </form>
    )
}

export const PostReduxForm = reduxForm<MyPostFormValueType, PropsType>({form:'post'})(PostForm)

export type MyPostFormValueType = {
    message: string
}
type MyPostFormValueTypeKeys = Extract<keyof MyPostFormValueType, string>
type PropsType = {}