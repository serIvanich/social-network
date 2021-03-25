
import { PostType, ProfileType } from '../type/type'
import profileReducer, { action } from './profile-reducer'

let state = {
    posts: [
        { id: 1, likeCount: 14, message: 'Hi! The day is fine!' },
        { id: 2, likeCount: 15, message: 'Yes! You are right!' },
        { id: 3, likeCount: 19, message: 'But sametime verry hot' },
        { id: 4, likeCount: 9, message: 'Yes! You are right!' }
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: '',
}

test ('new post should be added', () => {
    let actionTest = action.addPost('hello')
    
    let newState = profileReducer(state, actionTest)
    expect(newState.posts.length).toBe(state.posts.length + 1)
})
test ('message of new post should be correct', () => {
    let actionTest = action.addPost('hello')
    
    let newState = profileReducer(state, actionTest)
    expect(newState.posts[4].message).toBe('hello')
})

test ('after deleting length of messages should be decrement', () => {
    let actionTest = action.deletePost(1)
    let newState = profileReducer(state, actionTest)
    expect(newState.posts.length).toBe(state.posts.length - 1)
})
