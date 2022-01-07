import {UserType} from "../type/type"
import {ApiResponseType, instance} from "./api"

export const usersApi = {
    
    getUsers(pageSize: number = 10, currentPage: number = 1, term: string = '', friend: null | boolean = null ) {

        return instance.get<GetItemsType>
            (`users?count=${pageSize}&page=${currentPage}&term=${term}` + (friend !== null ? `&friend=${friend}`: ''))
        
        .then (response => response.data)
    },

    getFollow(id: number) {
        return instance.post<ApiResponseType>(`follow/${id}`)
        .then (response => response.data)
    },
    getUnfollow(id: number) {
        
        return instance.delete(`follow/${id}`)
        .then (response => response.data) as Promise<ApiResponseType>
    },
    getMyFollowUsers() {
        return instance.get<GetItemsType>(`users?count=3&page=1&friend=true`)
        .then (response => response.data)
    }

}

type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}