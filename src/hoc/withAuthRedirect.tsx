
import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

let mapStateToPropsForRedirect = (state: AppStateType) => ({ isAuth: state.auth.isAuth })

export function withAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) {

    const RedirectComponent: React.FC< MapStatePropsType> = (props) => {

        let {isAuth,...restProps} = props

        if (props.isAuth === false) {
            return <Redirect to='/login' />
        }

        return <WrappedComponent  {...restProps as WCP } />


    }

    let ConnectedAuthRedirectComponent = connect<MapStatePropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent



}

type MapStatePropsType = {isAuth: boolean}
// type MapDispatchPropsType = {}

