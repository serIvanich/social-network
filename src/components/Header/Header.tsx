import React, {FC} from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'


type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
  // logout: MouseEvent<HTMLButtonElement, MouseEvent>
  
}
// type React.MouseEventHandler<T = Element> = (event: MouseEvent<T, globalThis.MouseEvent>) => void
const Header: FC<HeaderPropsType>= (props) => {
 
    return (
      <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM3WE3ToDdtDACBRZJZNbQotVA3Dp26QpYcQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM3WE3ToDdtDACBRZJZNbQotVA3Dp26QpYcQ&usqp=CAU'/>
        <div className={s.loginBlock}>
          {props.isAuth
          ? <div>{ props.login } - <button onClick={props.logout}>Log out</button></div>
          :<NavLink to='/login'>LOGIN</NavLink>}
        </div>
      </header>)
}
export default Header