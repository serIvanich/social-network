import React, { FC } from 'react'
import { login, getCaptchaUrl } from '../../redux/auth-reducer'
import {connect, useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'
import { LoginReduxForm } from './LoginForm'

type LoginPropsType = {}

const Login: FC<LoginPropsType> = () => {

    const isAuth = useSelector((state: any) => state.auth.isAuth)
    const captchaUrl = useSelector((state: any) => state.auth.captchaUrl)
    const dispatch = useDispatch()
    const login = (email: string, password: string, rememberMe: boolean, captcha:string) => {
        dispatch(login(email, password, rememberMe, captcha))
    }
    const getCaptchaUrl = () => {
        dispatch(getCaptchaUrl())
    }
    const isLogin = (loginData: LogiFormValueType) => {
        login(loginData.email, loginData.password, loginData.rememberMe, loginData.captcha)
    }

    if (isAuth) {
        return <Redirect to={'/dialogs'} />
    }
    return <div>

        <h2>LOGIN</h2>
        <LoginReduxForm onSubmit={isLogin} captchaUrl={captchaUrl} captcha={getCaptchaUrl} />


    </div>
}
export default Login
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
type LogiFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
// type LoginFormValueTypeKeys = Extract<keyof LogiFormValueType, string>
