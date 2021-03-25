import React, { FC } from 'react'
import s from './../Dialogs.module.css'

type PropsType = {
    message: string
}

const Message: FC<PropsType> = (props) => {
    return <div className={s.message}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'/>-{props.message}</div>
}
export default Message