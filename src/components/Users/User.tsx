import React, {FC} from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/images.jpg'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../type/type'

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
export const User: FC<UserPropsType> = React.memo(({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={s.imgGroup}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.large != null ? user.photos.large : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {(user.followed

                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)

                        }}>FOLLOW</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>UNFOLLOW</button>)}

                </div>
            </div>
            <div className={s.userInfo}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{'user.adress.country'}</div>
                <div>{'user.adress.city'}</div>
            </div>
        </div>
    )
})
