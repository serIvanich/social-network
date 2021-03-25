import { DialogType, MessageType } from "../type/type"
import { InferActionType } from "./redux-store"

export let initialState = {

    myMessages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your IT-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ] as Array<MessageType>,
    friendsMessages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Ok.I am very want learn this' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ] as Array<MessageType>,
    dialogs: [
        { id: 1, name: 'Gleb' },
        { id: 2, name: 'Bogdan' },
        { id: 3, name: 'Olya' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Dimich' },
        { id: 6, name: 'Tanya' }
    ] as Array<DialogType>,
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessage
            return {
                ...state,

                myMessages: [...state.myMessages, { id: 6, message: body }]
            }


        default:
            return state
    }
}

export const action = {
    sendMessage: (newMessage: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessage } as const),
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof action>