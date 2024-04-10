import React, { useState } from 'react'
import '../../assets/styles/menu.css'
import { FaPlus } from "react-icons/fa";
// import pizzas from '../assets/pizzas.json'



const Menu = ({title, sizes, price, types, imageUrl}) => {

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)


    let typeNames = ['тонкое', 'традиционное']

    

  return (

    <div className='pizza_card'>
        <img src={imageUrl} alt="" />
        <h3>{title}</h3>
        <div className='pickAnOption'>
            <ul>
                {types.map(typeId => {
                    return( 
                        <li 
                            onClick={() => setActiveType(typeId)}
                            key={typeId}
                            className={activeType === typeId ? 'typeActive' : ''}>
                                    {typeNames[typeId]} 

                        </li> )
                })}
            </ul>
            <ul>
                {sizes.map((size, i)=>{
                    return (
                    <li         
                        key={i}
                        onClick={() => setActiveSize(i)}
                        className={activeSize === i ? 'typeActive' : ''}>{size} см.</li>)
                })}
            </ul>
        </div>
        <div className='pizza_price'>
            <h3>от {price} ₽</h3>
            <button className='btn btn-add'>
                <FaPlus />
                Добавить
            </button>
        </div>
    </div>
  )
}

export default Menu