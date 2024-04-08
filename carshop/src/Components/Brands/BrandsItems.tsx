import { motion } from 'framer-motion'


type BrandsItemsProps = {
    title: string
    img: string
    id: number
}

const BrandsItems = ({ title, img, id }: BrandsItemsProps) => {

    const vars = {
        hidden: { opacity: 0, y: 50},
        show: (id: number) => ({ 
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.10 * id
            }
        })
    }

  return (
    <motion.div className='brands_card' variants={vars} initial='hidden' whileInView='show' custom={id} viewport={{ once: true}}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
    </motion.div>
  )
}

export default BrandsItems