import React from 'react'
import './SelectPage.scss'
import CategoriesList from '../../components/body/categories/categoriesList/CategoriesList'
import TextField from '@mui/material/TextField';
import Button from '../../elements/button/Button';

function SelectPage() {
    return (
        <div className='container'>
            <div className='select'>
                <div className='select__text'>
                    <h1>Что тебе интересно?</h1>
                    <p>Выбери минимум 3 вида спорта, которые интересны тебе больше остальных. 
                        <span>Исходя из ответов мы составим подборку персонально для тебя!</span>
                    </p>
                </div>
                <div className='select__search'>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Поиск"
                        multiline
                        maxRows={6}
                        className='select__search__input'
                    />
                    <div className='select__search__btn'><Button label='Поиск' color='blue' /></div>
                </div>
                <CategoriesList view='select' />
            </div>
        </div>
    )
}

export default SelectPage