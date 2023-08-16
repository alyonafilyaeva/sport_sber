import React, { useState } from 'react'
import { initialCategories } from '../../../../store'
import Category from '../category/Category'
import Button from '../../../../elements/button/Button'
import './CategoriesList.scss'

interface CategoriesListProps {
    view: string
}
function CategoriesList(props: CategoriesListProps) {
    const [categories, setCategories] = useState(initialCategories.categories)
    let elements = categories.map(category => <Category category={category} view={props.view}/>)
    return (
        <div className='categories'>
            <div className='categories__list'>
                {elements}
            </div>
           {props.view == 'select' && <div className='categories__btn'>
                <Button label='Готово' color='blue' />
            </div>}

        </div>
    )
}

export default CategoriesList