import React, { useState } from 'react'
import './QuestPage.scss'
import Quest from '../../components/body/quests/quest/Quest'
import { initialQuest } from '../../store'
import Rating from '../../components/body/quests/rating/Rating'
import Post from '../../components/body/quests/posts/post/Post'
import MapQuest from '../../components/body/quests/map/Map'
import { NavLink } from 'react-router-dom'

function QuestPage() {
    const [active, setActive] = useState('posts')
    return (
        <div className='container'>
            <div className='quests'>
                <div className='quests__desktop'>
                    <h1>Квесты</h1>
                    <div className='quests__desktop__top'>
                        <Quest quest={initialQuest} />
                        <Rating />
                    </div>
                    <div className='quests__desktop__switch'>
                        <p onClick={() => setActive('map')}>Карта</p>
                        <p onClick={() => setActive('posts')}>Лента</p>
                    </div>
                    {active === 'posts' ? <Post /> : <MapQuest />}
                    <p>Смотреть архив квестов</p>
                </div>
                <div className='quests__mobile'>
                    <div className='quests__mobile__top'>
                        <h1>Квесты</h1>
                        <p>Архив квестов</p>
                    </div>
                    <Quest quest={initialQuest} />
                    <NavLink to='/rating' className='quests__mobile__rating'>Смотреть рейтинг</NavLink>
                    <div className='quests__mobile__switch'>
                        <p onClick={() => setActive('map')}>Карта</p>
                        <p onClick={() => setActive('posts')}>Лента</p>
                    </div>
                    {active === 'posts' ? <Post /> : <MapQuest />}
                </div>
            </div>
        </div>
    )
}

export default QuestPage