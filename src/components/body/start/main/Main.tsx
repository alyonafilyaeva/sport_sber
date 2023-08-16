import React from 'react'
import './Main.scss';
import redEllipse from '../../../../imgs/start/redEllipse.png';
import hockey from '../../../../imgs/start/hockey.png';
import Button from '../../../../elements/button/Button';

function Main() {
  return (
    <div className='main'>
      <div className='main__slogan'>
        <h1>Выходить за пределы,<br></br> покорять вершины, <br></br>быть лучшими!</h1>
        <Button label='Найти событие' color='white'/>
      </div>
      <div className='main__pictures'>
        <img src={redEllipse} alt='ellipse' />
        <img src={hockey} alt='hockey' />
      </div>
      <div className='main__text'>
        <p>Ищите спортивные мероприятия,<br></br> участвуйте в квестах, побеждайте и<br></br> забирайте подарки от наших спортсменов</p>
      </div>
    </div>
  )
}

export default Main
