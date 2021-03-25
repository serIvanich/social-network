import React from 'react'


import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { action } from '../../../redux/profile-reducer'
import { PostType } from '../../../type/type'
import { Action } from 'redux'
import { AppStateType } from '../../../redux/redux-store'


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        // value: state.profilePage.newPostText
    }
}

export default  connect(mapStateToProps,{addPost: action.addPost})(MyPosts)

export type MapStatePropsType = {
    posts: Array<PostType>
}
export type MapDispatchPropsType = {
    addPost: (message: string) => Action
}