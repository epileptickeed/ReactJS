
import brands from '../../../data/brands.json'
import BrandsItems from './BrandsItems'


const Brands = () => {
  return (
    <div className='brands'>
        {brands.map((item) => {
            return (
                <BrandsItems key={item.id} {...item}/>
            )
        })}
    </div>
  )
}

export default Brands