import React from 'react'
import './User.scss'
import user from '../../../../../imgs/user.svg'

function User() {
  return (
    <div className='user'>
        <div className='user__left'>
            <img src={user} alt='user' />
            <div className='user__left__info'>
                <p>Ксюша Попова</p>
                <p>18 зачетов</p>
            </div>
        </div>
        <div className='user__right'>
            <p>1 место</p>
        </div>
    </div>
  )
}

export default User