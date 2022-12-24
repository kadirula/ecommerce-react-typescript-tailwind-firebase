import './style.css';
import React from 'react'
import { Link } from 'react-router-dom';

interface ICategoryCardProps {
    category: string,
    key: number
}

const CategoryCard: React.FunctionComponent<ICategoryCardProps> = ({ category, key }) => {
    // console.log(category);

    return (
        <Link to={'/'} key={key} className='category-item uppercase font-semibold h-32 flex items-center justify-center rounded-md shadow-lg'>
            {category.replace('-', ' ')}
        </Link>
    )
}

export default CategoryCard