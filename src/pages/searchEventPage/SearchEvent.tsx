import React from 'react'
import './SearchEvent.scss'
import back from '../../imgs/back.svg'
import TextField from '@mui/material/TextField';
import Calendar from '../../components/body/main/calendar/Calendar';
import CategoriesList from '../../components/body/categories/categoriesList/CategoriesList';
import EventsList from '../../components/body/events/eventsList/EventsList';
import { initialEvent } from '../../store';

function SearchEvent() {
    return (
        <div className='searchEvents'>
            <div className='searchEvents__top'>
                <img src={back} alt='back' />
                <h3>Найти событие</h3>
            </div>
            <TextField
                id="outlined-multiline-flexible"
                label="Поиск"
                multiline
                maxRows={6}
                className='searchEvents__input'
            />
            <Calendar />
            <CategoriesList view='see' />
            <EventsList events={initialEvent} type='full' view='big' />
        </div>
    )
}

export default SearchEvent