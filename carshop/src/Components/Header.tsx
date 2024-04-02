
import { motion } from 'framer-motion'

const vars = {
    hidden: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
}


const Header = () => {
  return (
    <div className='header'>
        <div className="header__inner">
            <div className="top">
                <motion.img 
                variants={vars} initial='hidden' animate='animate' transition={{ delay: 2.3}} 
                src={require('/public/arrow.png')} alt="" />
                <div className="headers">
                    <motion.h1 
                    variants={vars} initial='hidden' animate='animate' transition={{ delay: 2.35}}
                    >NEW EVENT</motion.h1>

                    <motion.h1 
                    variants={vars} initial='hidden' animate='animate' transition={{ delay: 2.4}}
                    >coming up / june 7 - 13</motion.h1>    
                </div>
            </div>
            <div className="bottom">
                <motion.h1 
                variants={vars} initial='hidden' animate='animate' transition={{ delay: 2.3}}
                >crossfit</motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Header