import React, { useState } from 'react'
import './QuestPage.scss'
import Quest from '../../components/body/quests/quest/Quest'
import { initialQuest } from '../../store'
import Rating from '../../components/body/quests/rating/Rating'
import Post from '../../components/body/quests/posts/post/Post'
import MapQuest from '../../components/body/quests/map/Map'

function QuestPage() {
    const [active, setActive] = useState('posts')
  return (
    <div className='container'>
        <div className='quests'>
            <h1>Квесты</h1>
            <div className='quests__top'>
                <Quest quest={initialQuest}/>
                <Rating />
            </div>
            <div className='quests__switch'>
                <p onClick={() => setActive('map')}>Карта</p>
                <p onClick={() => setActive('posts')}>Лента</p>
            </div>
            {active === 'posts' ? <Post /> : <MapQuest />}
            <p>Смотреть архив квестов</p>
        </div>
    </div>
  )
}

export default QuestPage