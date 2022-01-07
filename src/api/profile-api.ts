import { PhotosType, ProfileType } from "../type/type"
import { instance, ApiResponseType } from "./api"

export const profileApi = {
    getProfileUser (userId: number | null) {
        
        return instance.get<ProfileType>('profile/'+ userId)
        .then (response => response.data)
    },
    getStatus (userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
        .then (response => response.data)
    },
    updateStatus (status: string) {
        return instance.put<ApiResponseType>(`profile/status`, {status: status} )
        .then (response => response.data)
    },
    saveProfile (profile: ProfileType) {
        
        return instance.put<ApiResponseType<ProfileType>>(`profile`, profile )
        .then (response => response.data)
    },
    savePhoto (photoFile: File) {

        const formData = new FormData ()
        formData.append('image', photoFile)

        return instance.put<ApiResponseType<SavePhotoDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then (response => response.data)
    }
}

type SavePhotoDataType = {
    photos: PhotosType
}