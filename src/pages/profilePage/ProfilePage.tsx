import React from 'react'
import { useState } from 'react'
import './ProfilePage.scss'
import My from '../../components/body/profile/my/My'
import Calendar from '../../components/body/profile/calendar/Calendar'
import Results from '../../components/body/profile/results/Results'
import Favourites from '../../components/body/profile/favourites/Favourites'
import SelectPage from '../selectPage/SelectPage'
import user from '../../imgs/user.svg'
import Button from '../../elements/button/Button'
import { NavLink } from 'react-router-dom'

function ProfilePage() {
    const [active, setActive] = useState('favourite')

    return (
        <div className=''>
            <div className='profile'>
                <div className='profile__desktop'>
                    <div className='container'>
                        <h1>Профиль</h1>
                        <div className='profile__desktop__switch'>
                            <p className={`profile__desktop__switch__item ${active === 'favourite' && 'profile__desktop__switch__item__active'} `}
                                onClick={() => setActive('favourite')}
                            >Избранное</p>
                            <p className={`profile__desktop__switch__item ${active === 'my' && 'profile__desktop__switch__item__active'} `}
                                onClick={() => setActive('my')}
                            >Мои предпочтения</p>
                            <p className={`profile__desktop__switch__item ${active === 'calendar' && 'profile__desktop__switch__item__active'} `}
                                onClick={() => setActive('calendar')}
                            >Календарь событий</p>
                            <p className={`profile__desktop__switch__item ${active === 'results' && 'profile__desktop__switch__item__active'} `}
                                onClick={() => setActive('results')}
                            >Результаты квестов</p>
                        </div>
                    </div>

                    <div className='profile__desktop__content'>
                        {active === 'favourite' && <Favourites />}
                        {active === 'my' && <SelectPage />}
                        {active === 'calendar' && <Calendar />}
                        {active === 'results' && <Results />}
                    </div>
                </div>
                <div className='profile__mobile'>
                    <h1>Профиль</h1>
                    <div className='profile__mobile__info'>
                        <img src={user} alt='user' />
                        <h3>Вася Пупкин</h3>
                        <p>pupkin@mail.com</p>
                        <Button label='Изменить фото' color='grey' />
                    </div>
                    <nav className='profile__mobile__nav'>
                        <NavLink to='/favourites'>Избранное</NavLink>
                        <NavLink to='/my'>Предпочтения</NavLink>
                        <NavLink to='/calendar'>Календарь событий</NavLink>
                        <NavLink to='/results'>Результаты квестов</NavLink>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage