import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import SidebarContainer from '../Sidebar/SidebarContainer'
import cn from 'classnames'


const Navbar: React.FC<PropsType> = () => {
    
    return (
        <nav className={s.nav}>
            <div className={cn(s.item, s.main)}>
                <NavLink to='/profile'  onFocus={() =>{}} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.sidebar}`}>
                <SidebarContainer  />
            </div>
        </nav>
    )
}
export default Navbar

type PropsType = {}