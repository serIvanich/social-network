import dialogsReducer, { action, initialState } from "./dialogs-reducer"



let state = initialState

beforeEach(() => {
    state =  {myMessages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your IT-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    friendsMessages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Ok.I am very want learn this' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    dialogs: [
        { id: 1, name: 'Gleb' },
        { id: 2, name: 'Bogdan' },
        { id: 3, name: 'Olya' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Dimich' },
        { id: 6, name: 'Tanya' }
    ],
    newMessageBody: '',
    }
})

test('new message should be added', () => {
    let actionTest = action.sendMessage('respect')
    let newState = dialogsReducer(state, actionTest)
    expect(newState.myMessages.length).toBe(state.myMessages.length + 1)
})