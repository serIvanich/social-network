import React, {FC} from 'react'
import {getCaptchaUrl, login} from '../../redux/auth-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {LoginReduxForm} from './LoginForm'
import {AppStateType} from "../../redux/redux-store";



export const LoginPage: FC = React.memo(() => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const dispatch = useDispatch()
    // const onlogin = (email: string, password: string, rememberMe: boolean, captcha:string) => {
    //     dispatch(login(email, password, rememberMe, captcha))
    // }
    // const captcha = () => {
    //     dispatch(getCaptchaUrl())
    // }
    const onSubmit = (formData: LoginFormValueType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>

        <h2>LOGIN</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />


    </div>
})
// export default Login
// const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
//     isAuth: state.auth.isAuth,
//     captchaUrl: state.auth.captchaUrl
// })
//
// export default connect(mapStateToProps, { login, getCaptchaUrl })(Login)
//
//
// type MapStatePropsType = {
//     isAuth: boolean
//     captchaUrl: string | undefined
// }
// type MapDispatchPropsType = {
//     login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
//     getCaptchaUrl: () => void
// }
//
// type LoginPropsType = MapStatePropsType & MapDispatchPropsType
//
type LoginFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
// type LoginFormValueTypeKeys = Extract<keyof LogiFormValueType, string>
