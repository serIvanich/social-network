import { instance } from "./api"

export const securityApi = {
    getCaptchaUrl () {
        return instance.get<GetCaptchaUrlType>("security/get-captcha-url")
    },
}

type GetCaptchaUrlType = {
    url: string
}