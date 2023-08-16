import React from 'react'
import './MainPage.scss'
import CategoriesList from '../../components/body/categories/categoriesList/CategoriesList'
import Calendar from '../../components/body/main/calendar/Calendar'
import Soon from '../../components/body/main/soon/Soon'
import Universiade from '../../components/body/main/universiade/Universiade'
import Recommend from '../../components/body/main/recommend/Recommend'
import Support from '../../components/body/main/support/Support'

function MainPage() {
  return (
    <div className='container'>
      <div className='mainPage'>
          <CategoriesList view='see'/>
          <Calendar />
          <Soon />
          <Universiade />
          <Recommend />
          <Support />
      </div>
    </div>
  )
}

export default MainPage