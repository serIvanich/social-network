import { ProfileType, PhotosType } from './../type/type';
// import * as axios from './node_modules/axios'
import axios from 'axios'
import { UserType } from '../type/type'

export const instance = axios.create({
    withCredentials: true,
    headers:{'API-KEY': '5aa09784-d22f-4e5d-a150-2a2cb2653fa2'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})












export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type ApiResponseType<T={}, RC=ResultCodeEnum> = {
    data: T
    resultCode: RC
    messages: Array<string>
}



