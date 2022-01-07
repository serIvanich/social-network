// import * as axios from './node_modules/axios'
import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '4cdd576b-fe8e-4ab2-8ae3-522fa7c936ae'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type ApiResponseType<T = {}, RC = ResultCodeEnum> = {
    data: T
    resultCode: RC
    messages: Array<string>
}



