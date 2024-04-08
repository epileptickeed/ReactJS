import { motion } from 'framer-motion'

const SignUpForm = () => {

    const vars = {
        hidden: { opacity: 0, y: 50 },
        default: { opacity: 1, y: 0 }
    }

  return (
    <div className='signup'>
        <div className="signup_text">
            <motion.h1 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>START HERE</motion.h1>
            <motion.h2 variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>GO!</motion.h2>
            <motion.p variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>fill the form below to start your journey</motion.p>
        </div>
        <form action="">
            <motion.input variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} type="name" placeholder='Name' />
            <motion.input variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }} type="email" placeholder='Email'/>
            <motion.button variants={vars} initial='hidden' whileInView='default' transition={{ delay: 0.5}} viewport={{ once:true }}>View More <img src={require('/public/btnArrow.png')} alt="btnArrow" /> </motion.button>
        </form>

    </div>
  )
}

export default SignUpForm
