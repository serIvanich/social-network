import React, { FC } from 'react'
import s from './Post.module.css'

const Post: FC<PostType> = ({name, message, likeCount}) => {
    
    return (
    <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'/>
        {name}:____ {message}
        <div>
            -like-{likeCount}
        </div>
    </div>)
}

export default Post
type PostType = {
    name: string
    message: string
    likeCount: number
}