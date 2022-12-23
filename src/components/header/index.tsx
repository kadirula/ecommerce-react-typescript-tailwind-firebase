import { useState } from 'react';
import SiteMenu from '../site-menu'
import Topbar from '../topbar'
import ProfileMenu from '../profile-menu'
import MenuIcon from '@mui/icons-material/Menu';
import AuthMenu from '../auth-menu';
import Search from '../search';

import ShoppingCartMenu from '../shopping-cart-menu';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {


    const user = false;

    return (
        <div className='bg-slate-100'>
            <Topbar />
            <div className='py-6 shadow-md'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center px-3 lg:px-0'>
                        <Link to='/' className='font-righteous text-sm sm:text-2xl uppercase transition-all duration-700 text-orange-500 hover:text-orange-700'>
                            E-Commerce
                        </Link>

                        <SiteMenu />

                        <div className='flex items-end justify-between gap-5'>

                            <Search />

                            <ShoppingCartMenu />

                            {
                                user
                                    ?
                                    <ProfileMenu />
                                    :
                                    <AuthMenu />

                            }
                            <a href="#" className='block lg:hidden'>
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