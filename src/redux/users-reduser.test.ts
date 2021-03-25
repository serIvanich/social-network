import {action, initialState, usersReducer} from "./users-reducer";


let state = initialState
beforeEach(() => {
    state = {
        users: [{
            id: 1,
            name: 'John',
            status: 'vivat',
            photos: { small: null, large: null },
            followed: false
        },
        {
            id: 2,
            name: 'Stiv',
            status: 'YO-yo',
            photos: { small: null, large: null },
            followed: false
        },
        {
            id: 3,
            name: 'Genry',
            status: 'Iam the best',
            photos: { small: null, large: null },
            followed: true
        },
        {
            id: 4,
            name: 'Serhio',
            status: 'Iam the best too',
            photos: { small: null, large: null },
            followed: true
        }
        ],
        totalUsersCount: 0,
        pageSize: 10,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        filter: {
            term: '',
            friend: null
        }

    }
})

test('get users', () => {
    let actionTest = action.setUsers([{
        id: 4,
        name: 'John2',
        status: 'vivat',
        photos: { small: null, large: null },
        followed: true
    },
    {
        id: 5,
        name: 'Stiv2',
        status: 'YO-yo',
        photos: { small: null, large: null },
        followed: false
    },
    {
        id: 6,
        name: 'Genry2',
        status: 'Iam the best',
        photos: { small: null, large: null },
        followed: true
    }
    ])
    let newState = usersReducer(state, actionTest)
    expect(newState.users[0]['name']).toBe('John2')

})

test('get follow', () => {
    let actionTest = action.getFollow(1)
    let newState = usersReducer(state, actionTest)
    expect(newState.users[0].followed).toBeTruthy
    expect(newState.users[3].followed).toBeFalsy
})
test('get unfollow', () => {
    let actionTest = action.getUnfollow(4)
    let newState = usersReducer(state, actionTest)
    expect(newState.users[3].followed).toBeTruthy
    expect(newState.users[0].followed).toBeFalsy
})
