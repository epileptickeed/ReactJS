import React from 'react'
import '../assets/styles/list.css'
import { useState } from 'react'

import { setCategory } from '../redux/slices/filterSlice'
import { useSelector, useDispatch } from 'react-redux'


const List = ({}) => {

    const dispatch = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)  

    const onChangeCategory = (id) => {
        dispatch(setCategory(id))
    }

    let categories = ['Все', 'Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='main_inner'>
        <div className="list">
            <ul>
                {categories.map( ( value, i ) => {
                    return <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? 'list-active' : ''}>{value}</li>
                })}
            </ul>
            
        </div>
    </div>
  )
}

export default List