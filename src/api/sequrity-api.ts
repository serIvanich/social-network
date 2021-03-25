import { instance } from "./api"

export const sequrityApi = {
    getCaptchaUrl () {
        return instance.get<GetCaptchaUrlType>("security/get-captcha-url")
    },
}

type GetCaptchaUrlType = {
    url: string
}