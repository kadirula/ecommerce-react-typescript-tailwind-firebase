import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarRating from '../star-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { DynamicStar } from "react-dynamic-star";

interface IProductCardProps {
    product: any,
    // key: number
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({ product }) => {

    const star = {
        rating: product.rating,
        totalStars: 5,
        sharpness: 2.5,
        width: 15,
        height: 15,
        outlined: true,
        outlinedColor: "",
        fullStarColor: "#FFBC00",
        emptyStarColor: "transparent"
    };

    return (
        <div className='shadow-md rounded-md overflow-hidden transition-all duration-500 hover:shadow-xl'>
            <div className='relative overflow-hidden cursor-pointer group'>
                <span className='absolute -top-1 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 bg-slate-200 bg-opacity-70 z-10'></span>
                <LazyLoadImage
                    className='w-full h-52 object-cover'
                    src={product?.thumbnail}
                    alt={product?.title}
                    effect='blur'
                    width='100%'
                />
                <div className="absolute left-0 -bottom-14 group-hover:bottom-4 w-full flex items-center justify-center gap-7 transition-all duration-500  z-20">
                    <div className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer hover:rotate-360 transition-all duration-500'>
                        <FavoriteBorderIcon />
                    </div>
                    <div className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer hover:rotate-360 transition-all duration-500'>
                        <AddShoppingCartIcon />
                    </div>
                </div>
            </div>
            <div className='text-center py-3'>
                <Link to='/' className='text-gray-500 text-xs block'>{product?.category}</Link>
                <Link to='/' className='font-semibold transition-all duration-500 hover:text-orange-500 capitalize'>{product?.title}</Link>
                <div className="flex items-center justify-center gap-2 mb-2">
                    {/* <StarRating rating={3} /> */}
                    <DynamicStar
                        rating={star.rating}
                        width={star.width}
                        height={star.height}
                        outlined={star.outlinedColor ? star.outlinedColor : star.outlined}
                        totalStars={star.totalStars}
                        sharpnessStar={star.sharpness}
                        fullStarColor={star.fullStarColor}
                        emptyStarColor={star.emptyStarColor}
                    />
                    <span className='text-xs font-semibold'>({product?.rating})</span>
                </div>
                <div className='font-semibold'>
                    {product?.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductCard