import React from 'react'
import './EventMini.scss'
import { IEvent } from '../../../../models'

interface EventMiniProps {
    event: IEvent
}

function EventMini(props: EventMiniProps) {
    return (
        <div className='eventMini'>
            <h3>МЕталлург</h3>
            <p className='eventMini__p'>матч</p>
            <div className='eventMini__bottom'>
                <div className='eventMini__bottom__info'>
                    <p className='eventMini__bottom__info__date'>date</p>
                    <p className='eventMini__bottom__info__price'>price</p>
                </div>
                    <p className='eventMini__bottom__ticket'>Открыть билет</p>

            </div>
        </div>
    )
}

export default EventMini