import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout} from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'

export type MSPropsType ={
    isAuth: boolean
    login: string | null
}
type MDPropsType = {logout: () => void}
type OwnPropsType = {}
type HeaderContainerType = MSPropsType & MDPropsType & OwnPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {

    
    render  ()  {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MSPropsType => {
    return{
    isAuth: state.auth.isAuth,
    login: state.auth.login
    }
}
export default connect(mapStateToProps,{logout}) (HeaderContainer)