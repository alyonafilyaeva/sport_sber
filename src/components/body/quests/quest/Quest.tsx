import React from 'react'
import { useState } from 'react'
import './Quest.scss'
import { IQuest } from '../../../../models'
import { initialQuest } from '../../../../store'
import questAva from '../../../../imgs/questAva.png'
import Button from '../../../../elements/button/Button'

interface QuestProps {
    quest: IQuest
}
function Quest(props: QuestProps) {
    const [quest, setQuest] = useState(initialQuest)
    return (
        <div className='quest'>
            <div className='quest__top'>
                <img src={questAva} alt='questAva' />
            </div>
            <div className='quest__info'>
                <div className='quest__info__top'>
                    <h3>{props.quest.name}</h3>
                    <h2>{props.quest.time}</h2>
                </div>

                <p>{props.quest.description}</p>
            </div>
            <div className='quest__btns'>
                <Button label='Смотреть событие' color='blue' />
                <Button label='Участовать' color='blue' />
            </div>
        </div>
    )
}

export default Quest