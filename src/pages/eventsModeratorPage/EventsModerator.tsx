import React from 'react'
import './EventsModerator.scss'
import CategoriesList from '../../components/body/categories/categoriesList/CategoriesList'
import Button from '../../elements/button/Button'
import EventsList from '../../components/body/events/eventsList/EventsList'
import { initialEvent } from '../../store'

function EventsModerator() {
  return (
    <div className='container'>
        <div className='eventsModerator'>
            <div className='eventsModerator__top'>
                <CategoriesList view='see' />
                <Button label='Создать событие' color='red' />
            </div>
            <EventsList events={initialEvent} view='small' type='full'/>
        </div>

    </div>
  )
}

export default EventsModerator