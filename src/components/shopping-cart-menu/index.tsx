import React, { useState, useEffect, useRef } from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import ProductImage from '../../assets/product-cart.png';


const shoppingCartItems = [
    {
        productName: 'Product Name - 1',
        price: '299.90',
        image: ProductImage
    },
    {
        productName: 'Product Name - 2',
        price: '499.90',
        image: ProductImage
    },
    {
        productName: 'Product Name - 3',
        price: '399.90',
        image: ProductImage
    },
    {
        productName: 'Product Name - 4',
        price: '199.90',
        image: ProductImage
    }
]

const ShoppingCartMenu = () => {

    const [isShoppingCart, setIsShoppingCart] = useState<boolean>(false);
    const shoppingRef = useRef<HTMLDivElement>(null);


    document.body.addEventListener('click', (e: any) => {
        const shoppingMenu = shoppingRef.current;
        if (shoppingMenu !== null) {
            if (e.target != shoppingMenu && !shoppingMenu.contains(e.target)) {
                setIsShoppingCart(false)
            }
        }
    })


    return (
        <div className='relative' id='shopping-menu' ref={shoppingRef}>
            <Badge badgeContent={4} sx={{ cursor: 'pointer' }} color="warning" onClick={() => setIsShoppingCart(!isShoppingCart)}>
                <ShoppingBasketIcon fontSize='medium' />
            </Badge>
            <div
                className={`absolute right-0 w-max min-w-80 shadow-lg bg-slate-100 transition-all duration-500 z-50 ${isShoppingCart ? 'top-full visible h-max' : 'top-0 invisible h-0 opacity-0'} `}
            >
                <div className='px-4 py-6'>
                    {
                        shoppingCartItems.map((item, index) => (
                            <div className={`flex items-center justify-between gap-4 py-3 ${(index + 1) != shoppingCartItems.length ? 'border-b border-gray-300' : ''}`} key={index}>
                                <div className='border border-gray-300 rounded-lg w-20 h-20 p-2'>
                                    <img src={item.image} />
                                </div>
                                <div className='px-2'>
                                    <a href='#' className='text-sm mb-2 inline-block font-semibold transition-all duration-500 hover:text-orange-500'>{item.productName}</a>
                                    <div className="flex items-center justify-between gap-6">
                                        <div className='flex items-center gap-3 text-sm'>
                                            <span className='cursor-pointer'>-</span>
                                            <span>1</span>
                                            <span className='cursor-pointer'>+</span>
                                        </div>
                                        <span className='text-sm font-semibold'>{`${item.price} ₺`}</span>
                                    </div>
                                    <div className='text-sm text-right text-red-400 mt-2 cursor-pointer'>sil</div>
                                </div>
                            </div>
                        ))
                    }
                    <button className='bg-orange-500 w-full text-sm text-white py-2 rounded-md transition-all duration-500 hover:bg-orange-600'>Siparişi Tamamla</button>

                </div>
            </div>
        </div>
    )
}

export default ShoppingCartMenu