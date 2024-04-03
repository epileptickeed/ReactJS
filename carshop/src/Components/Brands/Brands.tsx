
import brands from '../../../data/brands.json'
import BrandsItems from './BrandsItems'


const Brands = () => {
  return (
    <div className='brands'>
      {/* <iframe src="https://store.steampowered.com/widget/1086940/" frameborder="0" width="646" height="646"></iframe> */}
        {brands.map((item) => {
            return (
                <BrandsItems key={item.id} {...item}/>
            )
        })}
    </div>
  )
}

export default Brands