import './style.css';
import React from 'react'
import { Link } from 'react-router-dom';



interface ICategoryCardProps {
    category: string
}

const CategoryCard: React.FunctionComponent<ICategoryCardProps> = ({ category }) => {
    // console.log(category);

    return (

        <Link to={'/'} className='uppercase font-semibold h-32 flex items-center justify-center transition-all duration-700 hover:bg-gray-200 hover:bg-opacity-90'>
            {category.replace('-', ' ')}
        </Link>

    )
}

export default CategoryCard