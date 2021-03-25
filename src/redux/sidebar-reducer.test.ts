import { action, sidebarReducer, initialState } from "./sidebar-reducer"

let state = initialState
let users = [{
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
] 
beforeEach (() => {
   state = {
    friends: []
   }
})

test('should be get friends', () => {
  let actionTest = action.setFollowUsers(users)
  let newState = sidebarReducer(state, actionTest)
  expect(newState.friends.length).toBe(4)

})