import { instance, ApiResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./api"




export const authApi = {
    me () {
        return instance.get<ApiResponseType<MeResponseDataType>>('auth/me').then (response => response.data)
    },
    login (email: string, password: string, rememberMe=false, captcha=null as string | null) {
        return instance.post<ApiResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>('auth/login', {email, password, rememberMe, captcha }).then (response => response.data)
    },
    
    logout () {
        return instance.delete('auth/login').then (response => response.data)
    }
}

type MeResponseDataType = {
        id: number
        email: string
        login: string
    
}
type LoginResponseDataType = {
    userId: number
}