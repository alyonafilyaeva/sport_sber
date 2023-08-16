import React from 'react'
import './Calendar.scss'
import CalendarMini from '../../main/calendar/Calendar'
import EventsList from '../../events/eventsList/EventsList'
import { initialEvent } from '../../../../store'

function Calendar() {
  return (
    <div className='container'>
      <div className='calendar'>
          <CalendarMini />
          <div className='calendar__block'>
            <h3>18 августа, сегодня</h3>
            <EventsList events={initialEvent.events} type='mini' view='small'/>
          </div>
          <div className='calendar__block'>
            <h3>Запланированные</h3>
            <EventsList events={initialEvent.events} type='mini' view='small'/>
          </div>
          <div className='calendar__block'>
            <h3>Завершенные</h3>
            <EventsList events={initialEvent.events} type='mini' view='small'/>
          </div>
      </div>
    </div>
  )
}

export default Calendar