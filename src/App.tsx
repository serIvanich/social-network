import React, {ComponentType, useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainerWithHooks';
// import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preload/Preload';
import store, {AppStateType} from './redux/redux-store';
import {withSuspense} from './hoc/withSuspense';
import { LoginPage } from './components/Login/Login';

const DialogsContainer: React.FC = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainerWithHooks'))

const ProfileSuspensed = withSuspense(ProfileContainer)
const DialogsSuspensed = withSuspense(DialogsContainer)

const App: React.FC<AppPropsType> = (props) => {

    const catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {

        // alert(PromiseRejectionEvent.reason)
        console.log(event.reason)
    }

    useEffect(() => {
        props.initializeApp()
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        // setTimeout(window.removeEventListener('unhandledrejection', catchAllUnhandledErrors), 3000)
    },[])

    if (!props.initialized) { return <Preloader /> } 
    return (

        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/profile'} />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileSuspensed />} />
                    <Route path='/dialogs' render={() => <DialogsSuspensed />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/login' render={() => <LoginPage />} />
                    <Route path='*' render={() => <div>404 NOT FOUND</div>} />
                </Switch>
            </div>

        </div>)
}


let mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = compose<ComponentType>(
    connect(mapStateToProps, { initializeApp }),
    withRouter)
    (App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Provider store={store}>
            <AppContainer />
        </Provider>

    </BrowserRouter>
}
export default SamuraiJSApp

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    initializeApp: () => void
}
export type AppPropsType = MapStatePropsType & MapDispatchPropsType