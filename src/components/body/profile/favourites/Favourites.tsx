import React from 'react'
import './Favourites.scss'
import EventsList from '../../events/eventsList/EventsList'
import { initialEvent } from '../../../../store'

function Favourites() {
  return (
    <div className='container'>
      <EventsList events={initialEvent} type='full' view='big'/>
    </div>
  )
}

export default Favourites