import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Locations = () => {

    const locations = [
        {
            img: require('../assets/images/amster.png'),
            title: 'Lisbon Centre Coffee',
            address: 'Weteringstraat 48,1017,Amsterdam',
            phoneNum: 'Tel:020-7718364',
            email: 'Email:earlybirds@info.com',
            workingHoursFirst: 'Mon-Fri..........6.45am-3.00pm',
            workingHoursSec: 'Sat-Sun.........8.30am-4.00pm',
        },
        {
            img: require('../assets/images/amster.png'),
            title: 'Berlin Coffee Roastery',
            address: 'Weteringstraat 48,1017,Amsterdam',
            phoneNum: 'Tel:020-7718364',
            email: 'Email:earlybirds@info.com',
            workingHoursFirst: 'Mon-Fri..........6.45am-3.00pm',
            workingHoursSec: 'Sat-Sun.........8.30am-4.00pm',
        },
        {
            img: require('../assets/images/amster.png'),
            title: 'Amsterdam Coffee Shop',
            address: 'Weteringstraat 48,1017,Amsterdam',
            phoneNum: 'Tel:020-7718364',
            email: 'Email:earlybirds@info.com',
            workingHoursFirst: 'Mon-Fri..........6.45am-3.00pm',
            workingHoursSec: 'Sat-Sun.........8.30am-4.00pm',
        },
    ]

    const [locIndex, setLocIndex] = React.useState(0)

    const variants = {
        default: {
            // width: '100%',
            opacity: 1,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1]}
        },
        hidden: {
            // width: '0%',
            opacity: 0,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            // width: '0%',
            opacity: 0,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1]}
        }
    }

  return (
    <div className='location'>
        <div className='location__inner'>
            <AnimatePresence>
                {locations.map( (item, index) => {
                    return(  
                        <div className='location__div' key={index}>
                            <h1 
                            className='vertical__text'
                                onClick={() => setLocIndex(index)}
                            
                            >{item.title}</h1>
                            <motion.div 
                                className={ locIndex === index ? "location_info" : 'notActive'}
                                variants={variants}
                                animate={ locIndex === index ? 'default' : ''}
                                initial='hidden'
                                exit='exit'
                            >
                                <img src={item.img} alt={item.title} />
                                <div className="location_info__inner">
                                    <h1 className='location__title'>{item.title}</h1>

                                    <div className='main__info'>
                                        <p> {item.address} </p>
                                        <p> {item.phoneNum} </p>
                                        <p> {item.email} </p>
                                    </div>
                                    
                                    <div className='working_hours'>
                                        <p> {item.workingHoursFirst} </p>
                                        <p> {item.workingHoursSec} </p>
                                    </div>

                                    <button>contact us</button>
                                </div>
                            
                            </motion.div>
                        </div>
                        )
                })}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Locations