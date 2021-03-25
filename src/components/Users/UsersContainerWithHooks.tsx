import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {Users} from './Users'
import {getIsFetching} from '../../redux/users-selectors'
import Preloader from '../common/Preload/Preload'

export const UsersContainer: FC<PropsType> = () => {

    const isFetching = useSelector(getIsFetching)

    return (
        <div>
            <h2>Samurai</h2>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </div>
    )
}

type PropsType = {}





