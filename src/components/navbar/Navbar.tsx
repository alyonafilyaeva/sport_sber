import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <nav className='navbar__links'>
                <NavLink to='/main' className='navbar__links__link'>События</NavLink>
                <NavLink to='/quests' className='navbar__links__link'>Квесты</NavLink>
                <NavLink to='/main' className='navbar__links__link'>Площадки</NavLink>
                {/* <NavLink to='/profile' className='header__right__nav__link'>Профиль</NavLink> */}
                <NavLink to='/login' className='navbar__links__link'>Войти</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
