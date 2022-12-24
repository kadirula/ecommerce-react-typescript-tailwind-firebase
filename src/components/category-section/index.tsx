import React, { useState, useEffect } from 'react'
import { getAllCategories } from '../../services/product'
import CategoryCard from '../category-card'
import Title from '../title'

const CategorySection = () => {

    const [categories, setCategories] = useState<Array<any>>([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllCategories();
            if (res?.statusText === 'OK') {
                setCategories(res?.data);
            }
        }
        fetchData();
    }, [])


    return (
        <div className='container mx-auto'>
            <Title title='category' />
            <div className="grid grid-cols-5 py-5 gap-4 group">
                {
                    categories.map((category, index) => <CategoryCard category={category} key={index} />)
                }
            </div>
        </div>
    )
}

export default CategorySection