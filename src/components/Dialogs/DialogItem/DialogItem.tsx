import React, { FC } from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
           
            <NavLink to={path} activeClassName={s.active}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'/>
                {props.name}
            </NavLink>
        </div>  
    )
}
export default DialogItem