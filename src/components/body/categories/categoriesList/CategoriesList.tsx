import React, { useState } from 'react'
import { initialCategories } from '../../../../store'
import Category from '../category/Category'
import Button from '../../../../elements/button/Button'
import './CategoriesList.scss'
import { useNavigate } from 'react-router-dom'

interface CategoriesListProps {
    view: string
}
function CategoriesList(props: CategoriesListProps) {
    const [categories, setCategories] = useState(initialCategories.categories)
    let elements = categories.map(category => <Category category={category} view={props.view}/>)

    let nav = useNavigate()
    return (
        <div className='categories'>
            <div className='categories__list'>
                {elements}
            </div>
           {props.view == 'select' && <div className='categories__btn' onClick={() => {nav('/main')}}>
                <Button label='Готово' color='blue' />
            </div>}

        </div>
    )
}

export default CategoriesList