import React from 'react'
import { useState } from 'react'
import './ProfilePage.scss'
import My from '../../components/body/profile/my/My'
import Calendar from '../../components/body/profile/calendar/Calendar'
import Results from '../../components/body/profile/results/Results'
import Favourites from '../../components/body/profile/favourites/Favourites'
import SelectPage from '../selectPage/SelectPage'

function ProfilePage() {
    const [active, setActive] = useState('favourite')

    return (
        <div className=''>
            <div className='profile'>
                <div className='container'>
                <h1>Профиль</h1>
                <div className='profile__switch'>
                    <p className={`profile__switch__item ${active === 'favourite' && 'profile__switch__item__active'} `}
                        onClick={() => setActive('favourite')}
                    >Избранное</p>
                    <p className={`profile__switch__item ${active === 'my' && 'profile__switch__item__active'} `}
                        onClick={() => setActive('my')}
                    >Мои предпочтения</p>
                    <p className={`profile__switch__item ${active === 'calendar' && 'profile__switch__item__active'} `}
                        onClick={() => setActive('calendar')}
                    >Календарь событий</p>
                    <p className={`profile__switch__item ${active === 'results' && 'profile__switch__item__active'} `}
                        onClick={() => setActive('results')}
                    >Результаты квестов</p>
                </div>
                </div>
                
                <div className='profile__content'>
                    {active === 'favourite' && <Favourites />}
                    {active === 'my' && <SelectPage />}
                    {active === 'calendar' && <Calendar />}
                    {active === 'results' && <Results />}
                </div>
            </div>

        </div>
    )
}

export default ProfilePage