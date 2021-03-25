import React, { FC } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { MapDispatchPropsType, MapStatePropsType } from './MyPostsContainer'
import { MyPostFormValueType, PostReduxForm } from './AddPostForm/AddPostForm'





const MyPosts: FC<MyPostType > =  (props) => {
    
    

    let postsElements = 
        [...props.posts]
        .reverse()
        .map( p => <Post key={p.id} name={String(p.id)} likeCount={p.likeCount} message={p.message} />)
    
    // let newPostElement = React.createRef //???
    const onAddPost = (formData:MyPostFormValueType) => {
        
        props.addPost(formData.message)
    }
    return (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <PostReduxForm onSubmit={onAddPost} />
        <div className={s.posts}>
            {postsElements}  
        </div>
     </div>)
}
const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized



type MyPostType = MapStatePropsType & MapDispatchPropsType 
// type MyPostOwnType = {
//     onSubmit: (formData: MyPostFormValueType) => void
// }