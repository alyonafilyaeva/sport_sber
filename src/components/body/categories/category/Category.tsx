import React, { useState } from 'react'
import './Category.scss'
import { ICategory } from '../../../../models'

interface CategoryProps {
    category: ICategory
    view: string
}

function Category(props: CategoryProps) {
    let [click, setClick] = useState<boolean>(false)

    let handleClick = () => {
        setClick(click => !click)
    }
  return (
    <div className={`category__${props.view} ${click && `category__${props.view}__click`}`} onClick={() => handleClick()}>{props.category.category_name}</div>
  )
}

export default Category