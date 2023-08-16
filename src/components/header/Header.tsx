import React from 'react'
import './Header.scss'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__left__logo'>
          еспорт
        </div>
        <div className='header__left__search'>
          <TextField
            id="outlined-multiline-flexible"
            label="Найдите события, места, хобби"
            multiline
            maxRows={6}
            className='header__left__search__input'
          />
        </div>
      </div>
      <div className='header__right'>
        <nav className='header__right__nav'>
          <NavLink to='/main' className='header__right__nav__link'>События</NavLink>
          <NavLink to='/quests' className='header__right__nav__link'>Квесты</NavLink>
          <NavLink to='/main' className='header__right__nav__link'>Площадки</NavLink>
          <NavLink to='/profile' className='header__right__nav__link'>Профиль</NavLink>
          <NavLink to='/login' className='header__right__nav__link header__right__nav__link__enter'>Выход</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header