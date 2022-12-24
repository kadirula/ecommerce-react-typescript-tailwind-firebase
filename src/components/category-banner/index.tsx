import React, { useState, useEffect } from 'react'
import { categories } from '../../mocks/categories';
import { Link } from 'react-router-dom';
import CategoryBannerSkeleton from '../skeleton/CategoryBannerSkeleton';

const CategoryBanner: React.FunctionComponent = () => {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])


  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-7 gap-2'>

      {
        categories.map((category) => (
          loading ?
            <CategoryBannerSkeleton category={category} />
            :
            <div
              className={`w-full h-64 ${category.size === 'lg' ? 'lg:h-full lg:row-span-2 lg:col-span-3' : 'lg:col-span-2'} relative overflow-hidden flex items-center justify-start`}
              style={{ backgroundColor: category.bg }}
              key={category.id}
            >
              <img src={category.image} className='absolute -right-10 top-0 z-0 h-full object-cover' alt={category.title} />
              <div className='pl-6 relative z-10'>
                <h5 className='font-semibold uppercase text-3xl'>{category.title}</h5>
                <Link to={`/product/category/${category.url}`} className='inline-block uppercase border-b-2 border-orange-500 font-semibold mt-3 text-gray-600'>Shop Now</Link>
              </div>
            </div>
        ))
      }
    </div>
  )
}

export default CategoryBanner