import React from 'react'
import './AddEventPage.scss'
import TextField from '@mui/material/TextField';
import Button from '../../elements/button/Button';

function AddEventPage() {
    return (
        <div className='container'>
            <div className='add'>
                <h1>Создать событие</h1>
                <form>
                <div className='add__left'>
                    <div className='add__left__item'>
                        <label>Название</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    <div className='add__left__item'>
                        <label>Дата</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    <div className='add__left__item'>
                        <label>Начало</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    <div className='add__left__item'>
                        <label>Продолжительность</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    <div className='add__left__item'>
                        <label>Адрес</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    <div className='add__left__item'>
                        <label>Стоимость</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__left__item__input'
                        />
                    </div>
                    
                </div>
                <div className='add__right'>
                <div className='add__right__item'>
                        <label>Картинка</label>
                        <p>Загрузите картинку, которая станет обложкой вашему квесту. Обратите внимание, 
                            что картинка должна быть формата не менее 960х540 пикселей. 
                        </p>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__right__item__input'
                        />
                    </div>
                    <div className='add__right__item'>
                        <label>Описание</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__right__item__input'
                        />
                    </div>
                    <div className='add__right__item'>
                        <label>Категория</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__right__item__input'
                        />
                    </div>
                    <div className='add__right__item'>
                        <label>Вид спорта</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Название"
                            multiline
                            maxRows={6}
                            className='add__right__item__input'
                        />
                    </div>
                </div>
                </form>
                <Button label='Создать событие' color='red' />
            </div>
        </div>
    )
}

export default AddEventPage