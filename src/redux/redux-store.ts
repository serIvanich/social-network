import { createStore, combineReducers, applyMiddleware, compose, Action } from"redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,})

  

//@ts-ignore    
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
        applyMiddleware(thunkMiddleware)
      ));
//@ts-ignore
window.__store__ = store
    
export default store    

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

// type PropertiesType<T> = T extends {[key: string]: infer U}? U: never
// export type InferActionType<T extends {[key:string]: (...arg:any) => any}> = ReturnType<PropertiesType<T>>
export type InferActionType<T> = T extends {[key:string]: (...arg:any) => infer U}? U: never

export type BaseThunkType<A extends Action, R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>