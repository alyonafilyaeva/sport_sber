import React from 'react'
import './Rating.scss'
import UsersList from '../users/usersList/UsersList'

function Rating() {
  return (
    <div className='rating'>
        <h3>Рейтинг</h3>
        <p>Ваше место 5</p>
        <UsersList />
    </div>
  )
}

export default Rating