import  React, { FC } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validator/validator'
import { createField, Textarea } from '../common/FormsControls/FormsControls'
import { NewMessageFormValueType } from './Dialogs'

const maxLength30 = maxLengthCreator(30)


const DialogsForm: FC<InjectedFormProps<NewMessageFormValueType, PropsType> & PropsType>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<NewMessageFormValueTypeKeys>('enter you message', 'newMessage', [required, maxLength30], Textarea )}
            
            <button >new post</button>
        </form>
    )
}

export const DialogsReduxForm = reduxForm<NewMessageFormValueType & PropsType> ({form: 'dialogsMessage'})(DialogsForm)

type NewMessageFormValueTypeKeys = Extract<keyof NewMessageFormValueType, string>
type PropsType = {}