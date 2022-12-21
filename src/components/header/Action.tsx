import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Action = () => {
    return (
        <div className='flex items-center justify-between gap-5'>
            <a href="#" className='text-xs'>Login / Register</a>
            <a href=""><SearchIcon /></a>
            <Badge badgeContent={4} color="warning">
                <FavoriteBorderIcon />
            </Badge>
            <Badge badgeContent={4} color="warning">
                <ShoppingBasketIcon />
            </Badge>
        </div>
    )
}

export default Action