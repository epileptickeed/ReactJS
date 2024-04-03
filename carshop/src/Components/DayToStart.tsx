import { motion } from 'framer-motion'

const DayToStart = () => {
    const vars = {
        hidden: { opacity: 0, y: 50 },
        default: { opacity: 1, y: 0 }
    }
  return (
    <div className='daytostart'>
        <div className="daytostart_inner">

            <div className="daytostart_img">
                <motion.img variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5 }} viewport={{ once:true }} src={require('/public/curls.png')} alt="curls" />
            </div>

            <div className="daytostart_info">
                <motion.h1 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5 }} viewport={{ once:true }}>Today is the best<br/>day to start!</motion.h1>
                <motion.h2 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.6 }} viewport={{ once:true }}>START</motion.h2>
                <motion.p variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.7 }} viewport={{ once:true }}>Sed abhorreant constituam consectetuer eu. At mei <br/> clita deserunt, his movet molestie nemore.</motion.p>
                <motion.button variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>View More <img src={require('/public/btnArrow.png')} alt="btnArrow" /> </motion.button>
            </div>
          
        </div>
    </div>
  )
}

export default DayToStart