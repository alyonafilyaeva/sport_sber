import React from 'react'
import './LoginPage.scss'
import Button from '../../elements/button/Button'
import TextField from '@mui/material/TextField';

function LoginPage() {
  return (
    <div className='container'>
      <div className='login'>
        <div className='login__block'>
          <div className="login__block__logo">
            {/* <img src={} alt="logo" /> */}
            
          </div>
          <p className='login__block__enter'>Войти</p>
          <div className='login__block__form'>
            <TextField
              id="outlined-multiline-flexible"
              label="Логин"
              multiline
              maxRows={6}
              className='login__block__form__input'
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Пароль"
              multiline
              maxRows={6}
              className='login__block__form__input'
            />
          </div>
          <div className='auth__block__buttons'>
            <Button label='Войти' color='blue' />
            <Button label='Зарегистрироваться' color='white' />
            <p>Я не помню пароль</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage