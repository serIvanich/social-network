import React, { ComponentType } from 'react'
import { action, InitialStateType } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'






let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        myMessages: state.dialogsPage.myMessages,
        friendsMessages: state.dialogsPage.friendsMessages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

// type MapStatePropsType = {
//     dialogs: Array<DialogType>
//     myMessages: Array<MessageType>
//     friendsMessages: Array<MessageType>
//     newMessageBody?: string
    
// }

type MapStatePropsType = InitialStateType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage: action.sendMessage}),
    withAuthRedirect 
)(Dialogs)
// let DialogsAuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, {sendMessage}) (DialogsAuthRedirectComponent)

// export default compose(
//     connect(mapStateToProps, {sendMessage}),
//     withAuthRedirect)
// (Dialogs)