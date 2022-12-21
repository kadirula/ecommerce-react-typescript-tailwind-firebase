import { useState } from 'react';
import Menu from './Menu'
import Topbar from '../topbar'
import ProfileMenu from '../profile-menu'
import MenuIcon from '@mui/icons-material/Menu';
import AuthMenu from '../auth-menu';

import ShoppingCartMenu from '../shopping-cart-menu';

const Header = () => {

    
    const user = true;

    return (
        <div className='bg-slate-100'>
            <Topbar />
            <div className='py-6 shadow-md'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='font-righteous text-sm sm:text-2xl uppercase transition-all duration-700 text-orange-500 hover:text-orange-700'>
                            E-Commerce
                        </a>

                        <Menu />

                        <div className='flex items-end justify-between gap-5'>
                            <ShoppingCartMenu />

                            {
                                user
                                    ?
                                    <ProfileMenu />
                                    :
                                    <AuthMenu />

                            }
                            <a href="#" className='block sm:hidden'>
                                <MenuIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header