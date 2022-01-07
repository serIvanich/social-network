import React, {FC} from 'react';
import {Field, Form, Formik} from 'formik';
import {UsersSearchFilterType} from './../../redux/users-reducer'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}


const UsersSearchForm: FC<PropsType> = React.memo((props) => {

    const submit = (values: FormValueType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: UsersSearchFilterType = {
            term: values.term,
            friend: (values.friend === 'null') ? null : (values.friend === 'true') ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik initialValues={{term: '', friend: 'null'}} validate={usersSearchFormValidate} onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">all</option>
                        <option value='true'>only followed</option>
                        <option value='false'>only unfollowed</option>

                    </Field>

                    <button type="submit" disabled={isSubmitting}>
                        FIND
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})
export default UsersSearchForm

type PropsType = {
    onFilterChanged: (filter: UsersSearchFilterType) => void
}
type FormValueType = {

    term: string
    friend: 'null' | 'true' | 'false'

}