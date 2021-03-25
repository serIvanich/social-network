import React from 'react'
import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validator/validator"
import { createField, Input } from "../common/FormsControls/FormsControls"
import s from '../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<LogiFormValueType, LoginFormOwnProps, string> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl, captcha }) => {
    if (captchaUrl === undefined) {
        captcha()
    }
    return (

        <form onSubmit={handleSubmit}>

            {createField<LoginFormValueTypeKeys>('Email', 'email', [required], Input)}

            {createField<LoginFormValueTypeKeys>('Password', 'password', [required, maxLength30], Input, { type: 'password' })}

            {createField<LoginFormValueTypeKeys>(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

            {<img className={s.captcha} src={captchaUrl} />}
            {captchaUrl && createField<LoginFormValueTypeKeys>('i am not robot', 'captcha', [required], Input)}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>

        </form>
    )
}
export const LoginReduxForm = reduxForm<LogiFormValueType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

export type LogiFormValueType = {
    email: string 
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValueTypeKeys = Extract<keyof LogiFormValueType, string>
type LoginFormOwnProps = {
    captchaUrl: string | undefined
    captcha: () => void
}
