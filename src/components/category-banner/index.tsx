import React from 'react'
import WomanImage from '../../assets/home-banner/woman.png';
import ManImage from '../../assets/home-banner/man.png';
import CosmeticsImage from '../../assets/home-banner/cosmetics.png';
import KidsImage from '../../assets/home-banner/kids.png';
import AccessoriesImage from '../../assets/home-banner/accessories.png';


const categories = [
  {
    image: WomanImage,
    title: 'Women Fashion',
    items: '140',
    size: 'lg',
    bg: '#fae3d9'
  },
  {
    image: ManImage,
    title: 'Men Fashion',
    items: '140',
    size: 'sm',
    bg: '#d6d3f0'
  },
  {
    image: CosmeticsImage,
    title: 'Cosmetics',
    items: '140',
    size: 'sm',
    bg: '#bee2d6'
  },
  {
    image: KidsImage,
    title: 'Kids Fashion',
    items: '140',
    size: 'sm',
    bg: '#cee2f5'
  },
  {
    image: AccessoriesImage,
    title: 'Accessories',
    items: '140',
    size: 'sm',
    bg: '#fedbe4'
  }
]

const CategoryBanner: React.FunctionComponent = () => {
  return (
    <div className='grid lg:grid-cols-7 gap-2'>

      {
        categories.map((category, index) => (
          <div className={`w-full h-64 bg-[${category.bg}]  ${category.size === 'lg' ? 'lg:h-full lg:row-span-2 lg:col-span-3' : 'lg:col-span-2'} relative overflow-hidden flex items-center justify-start`} key={index}>
            <img src={category.image} className='absolute -right-10 top-0 z-0 h-full object-cover' alt={category.title} />
            <div className='pl-6 relative z-10'>
              <h5 className='font-semibold uppercase text-3xl'>{category.title}</h5>
              <span className='block mb-3 text-sm text-gray-500'>{category.items} items</span>
              <a href="#" className='inline-block uppercase border-b-2 border-orange-500 font-semibold'>Shop Now</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CategoryBanner