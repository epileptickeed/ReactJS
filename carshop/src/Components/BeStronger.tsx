import { motion } from 'framer-motion'


const BeStronger = () => {

  const vars = {
    hidden: { opacity: 0, y: 50 },
    default: { opacity: 1, y: 0 }
  }

  return (
    <div className='stronger'>
        <div className="stronger_inner">
          <div className="stronger_info">
            <motion.h1 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5 }} viewport={{ once:true }}>Be you, just stronger!<br/> Power is in you</motion.h1>
            <motion.h2 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.6 }} viewport={{ once:true }}>STRONG</motion.h2>
            <motion.p variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.7 }} viewport={{ once:true }}>Unum solum justo ex ius. Pro cu probo laboramus<br/> eius insolens euripidis te eos, ut agam tota.</motion.p>
            <motion.button variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>View More <img src={require('/public/btnArrow.png')} alt="btnArrow" /> </motion.button>
          </div>
          <div className="stronger_img">
            <motion.img variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5 }} viewport={{ once:true }} src={require('/public/pullup.png')} alt="pullup.png" />
          </div>
        </div>
    </div>
  )
}

export default BeStronger