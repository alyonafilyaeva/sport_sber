import React from 'react'
import './QuestsModerator.scss'
import Button from '../../../../elements/button/Button'
import Quest from '../quest/Quest'
import { initialQuest } from '../../../../store'

function QuestsModerator() {
    return (
        <div className='container'>
            <div className='questsModerator'>
                <div className='questsModerator__top'>
                    <h1>Квесты</h1>
                    <Button label='Создать квест' color='red' />
                </div>
                <div className='questsModerator__plan'>
                    <h3>Запланированные</h3>
                    <Quest quest={initialQuest}/>
                </div>
                <div className='questsModerator__finish'>
                <h3>Завершенные</h3>
                    <Quest quest={initialQuest}/>
                </div>
            </div>
        </div>
    )
}

export default QuestsModerator