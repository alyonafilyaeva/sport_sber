import React from 'react'
import './Rating.scss'
import UsersList from '../users/usersList/UsersList'
import back from '../../../../imgs/back.svg'

function Rating() {
  return (
    <div className='rating'>
      <div className='rating__desktop'>
        <h3>Рейтинг</h3>
        <p>Ваше место - 5</p>
        <UsersList />
      </div>
      <div className='rating__mobile'>
        <div className='rating__mobile__top'>
        <img src={back} alt='back' />
        <h3>Рейтинг</h3>
        </div>
        
        <p>Ваше место - 5</p>
        <UsersList />
      </div>

    </div>
  )
}

export default Rating