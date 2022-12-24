import React from 'react'
import CategoryBanner from '../../components/category-banner'
import CategorySection from '../../components/category-section'
import ProductContainer from '../../components/product-container'

const Home: React.FunctionComponent = () => {
    return (
        <div className='py-3'>
            <CategoryBanner />
            <ProductContainer type='sunglasses' />
            <CategorySection />
            <ProductContainer type='laptops' />
            <ProductContainer type='mens-watches' />
            <ProductContainer type='womens-watches' />
            <ProductContainer type='smartphones' />
        </div>
    )
}

export default Home