import React, {FC, useEffect} from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import {User} from './User'
import UsersSearchForm from './UsersSearchForm'
import {requestUsers, UsersSearchFilterType} from '../../redux/users-reducer'
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUser,
    getUsersSearchFilter
} from "../../redux/users-selectors";


export const Users: FC<UsersPropsType> = React.memo(() => {

    const users = useSelector(getUser)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getUsersSearchFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(pageSize, currentPage, filter))
    }, [])

    const onPageChanged = (numberPage: number) => {
        dispatch(requestUsers(pageSize, numberPage, filter))
    }
    const onFilterChanged = (filter: UsersSearchFilterType) => {
        dispatch(requestUsers(1, currentPage, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }


    return <div className={s.users}>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
        />

        {users.map(u => <User key={u.id} user={u}
                              followingInProgress={followingInProgress}
                              unfollow={unfollow}
                              follow={follow}/>)}


    </div>


})


type UsersPropsType = {}