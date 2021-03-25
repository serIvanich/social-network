import React, { FC} from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../utils/validator/validator'
import s from './FormsControls.module.css'



const FormControl: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}


export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl> 
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl> 
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType , 
                            validators: Array<FieldValidatorType>, 
                            component: FC<WrappedFieldProps>, 
                            props?: {}, 
                            text="") {
    return <div>
        <Field placeholder={placeholder} name={name}
            validate={validators} component={component} {...props}
        /> {text}
    </div>
}
export type GetStringKeys<T> = Extract<keyof T, string>