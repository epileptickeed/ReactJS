
import { motion } from 'framer-motion'

const Home = () => {

  const vars = {
    
    onscreen: {
      y: "-50px",
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <div>
      <motion.div
        variants={vars}
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      className="box"></motion.div>
    </div>
  )
}

export default Home