import React from 'react'

import cars from '.././data/cars.json'

// type CarsProps = {
//     id: number
//     image: string
//     title: string
//     hundred: number
//     year: number
//     horsepower: number
//   }


const Cars = () => {

    const [curCar, setCurCar] = React.useState(0)

    const handleClick = (id: number) => {
        setCurCar(id)
    }

  return (
    <>
        <div className="cars">

            <div className='cars_names'>
                {cars.map((item, index) => {
                    return ( 
                            <div className="cars_names__inner" key={index}>
                                <ul>
                                    <li onClick={() => handleClick(index)}>{item.title}</li>
                                </ul>
                            </div>
                    )
                })}
            </div>

            <div className='cars_image'>
                {cars.map((item,index) => {
                    return (
                            <img className={curCar === item.id ? 'cars_image_inner' : 'notActiveImg'}
                             src={item.image} 
                             style={{ width: '300px', maxHeight: '100%' }} 
                             alt={item.title} 
                             key={index}
                             />
                    )
                })}
            </div>

            <div className='cars_info'>
                {cars.map((item, index) => {
                    return (
                        <div key={index} className={curCar === item.id ? 'cars_info' : 'notActiveImg'}>
                            <p>Разгон до сотни: {item.hundred}</p>
                            <p>Год выпуска: {item.year}</p>
                            <p>Лошадинные силы: {item.horsepower}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
        
    </>

    // <div className='cars'>
    //     <div className='cars_names'>
    //         <ul>
    //             <li>{title}</li>
    //         </ul>
    //     </div>

    //     <div className={curCar === id ? 'cars_image' : 'notActiveImg'}>
    //         <img src={image} style={{ width: '300px' }} alt="" />
    //     </div>

    //     <div className={curCar === id ? 'cars_info' : 'notActiveImg'}>
    //         <p>Разгон до сотни: {hundred}</p>
    //         <p>Год выпуска: {year}</p>
    //         <p>Лошадинные силы: {horsepower}</p>
    //     </div>
    // </div>
  )
}

export default Cars