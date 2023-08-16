import React from 'react'
import './Event.scss'
import { IEvent } from '../../../../models'
import { NavLink } from 'react-router-dom'
import eventAva from '../../../../imgs/event.png'
import heart from '../../../../imgs/heart.svg'

interface EventProps {
  event: IEvent
}

function Event(props: EventProps) {
  return (
    <NavLink to={`/event/${props.event.event_id}`} className="event" state={props.event}>
    <div className="event__top">
        <img src={eventAva} alt='eventAva'/>
        <img src={heart} alt='heart' className="event__top__heart" /* onClick={() => handleClick()} *//>
    </div>
    <div className="event__bottom">
        <div className="event__bottom__name">{props?.event?.name}</div>
        <div className="event__bottom__date">{props?.event?.date}</div>
        <div className="event__bottom__price">{props?.event?.price}</div>
        <div className="event__bottom__place">{props?.event?.place}</div>
    </div>
</NavLink>
  )
}

export default Event