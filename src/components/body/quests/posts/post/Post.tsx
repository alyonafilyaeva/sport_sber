import React from 'react'
import './Post.scss'
import postPhoto from '../../../../../imgs/postPhoto.png'
import user from '../../../../../imgs/user.svg'
import Button from '../../../../../elements/button/Button'
import TextField from '@mui/material/TextField';

function Post() {
    return (
        <div className='post'>
            <div className='post__left'>
                <img src={postPhoto} alt='postPhoto' />
            </div>
            <div className='post__right'>
                <div className='post__right__text'>
                    <div className='post__right__text__name'>
                        <img src={user} alt='user' />
                        <div className='post__right__text__name__info'>
                            <p>Ксюша Попова</p>
                            <p>Сегодня, 17:17</p>
                        </div>
                    </div>
                    <p>ДИВС</p>
                    <p>Удивительный мачт, удивительные люди, всей семье очень понравилось. Люблю спорт, теперь прививаю эту любовь своим детям!</p>
                    <Button label='Зачет' color='red' />
                </div>
                <div className='post__right__comment'>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Написать комментарий"
                        multiline
                        maxRows={6}
                        className='post__right__comment__input'
                    />
                </div>
            </div>

        </div>
    )
}

export default Post