import React, { FC } from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { InitialStateType } from '../../redux/dialogs-reducer'
import { DialogsReduxForm } from './DialogsForm'





const Dialogs: FC<DialogsPropsType> = (props) => {
    
    
    let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let myMessagesElement = props.myMessages.map( m => <Message message={m.message}  key={m.id} />)

    let yourMessagesElement = props.friendsMessages.map( m => <Message message={m.message}  key={m.id} />)

       
    const addNewMessage = (value:NewMessageFormValueType) => {
        props.sendMessage(value.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
            
                {dialogsElement}
               
            </div>
            <div className={s.messages}>
                {myMessagesElement}
            </div>
            <div className={s.messages}>
                {yourMessagesElement}
            </div>
            <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
    )
}
export default Dialogs

export type NewMessageFormValueType = {newMessage: string}

export type DialogsPropsType = InitialStateType & {sendMessage: (textMessage: string) => void}