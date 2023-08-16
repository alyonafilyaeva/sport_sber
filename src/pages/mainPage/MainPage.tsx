import React from 'react'
import './MainPage.scss'
import CategoriesList from '../../components/body/categories/categoriesList/CategoriesList'
import Calendar from '../../components/body/main/calendar/Calendar'
import Soon from '../../components/body/main/soon/Soon'
import Universiade from '../../components/body/main/universiade/Universiade'
import Recommend from '../../components/body/main/recommend/Recommend'
import Support from '../../components/body/main/support/Support'
import { NavLink } from 'react-router-dom'

function MainPage() {
  return (
    <div className='container'>
      <div className='mainPage'>
        <div className='mainPage__mobile'>
          <h1>Афиша</h1>
          <NavLink to='/events' className='mainPage__mobile__btn'>Найти</NavLink>
        </div>
        <div className='mainPage__desktop'>
          <CategoriesList view='see' />
          <div>
            <h1>Календарь событий</h1>
            <Calendar />
          </div>
          
        </div>

        <Soon />
        <Universiade />
        <Recommend />
        <Support />
      </div>
    </div>
  )
}

export default MainPage