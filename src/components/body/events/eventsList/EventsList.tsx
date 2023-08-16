import React, { useEffect, useState } from 'react'
import './EventsList.scss'
import { IEvent } from '../../../../models'
import axios from 'axios'
import { AXIOS_URL, initialEvent } from '../../../../store'
import Event from '../event/Event'
import EventMini from '../eventMini/EventMini'

interface EventsListProps {
  events: object
  type: string
  view: string
}

function EventsList(props: EventsListProps) {
  const [events, setEvents] = useState<IEvent[]>(initialEvent.events)
  /* async function getEvents() {
    const response = axios.get<[]>(`http://${AXIOS_URL}/api/event`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJlbWFpbCI6ImFsZW5hQG1haWwucnUiLCJuYW1lIjoi0JDQu9GR0L3QsCIsInJvbGUiOiLQn9C-0LvRjNC30L7QstCw0YLQtdC70YwiLCJpYXQiOjE2OTE4OTQwNjN9.azUXyJNaPcUOybquMBTkOCXFscgyzkCtk_doFs7gM9s'
      }
    })
    let data = await response
    setEvents(data?.data)
    console.log(data?.data)
  } */
  let elements = events.map(event => 
    props.type === 'full'? <Event event={event} view={props.view}/> : <EventMini event={event} />
  )
  /* useEffect(() => {
    getEvents()
  }, []) */
  return (
    <div className='eventList'>
      {elements}
    </div>
  )
}

export default EventsList