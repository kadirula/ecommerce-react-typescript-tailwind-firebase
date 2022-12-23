import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteMenu: React.FunctionComponent = () => {

    const menus = [
        {
            text: "Home",
            path: "/"
        },
        {
            text: "Women's",
            path: "/women"
        },
        {
            text: "Man's",
            path: "/man"
        },
        {
            text: "Child's",
            path: "/child"
        },
        {
            text: "Shop",
            path: "/shop"
        }
    ];

    return (
        <div className='items-center justify-center gap-8 hidden lg:flex'>
            {
                menus.map((menu, index) => (
                    <NavLink
                        key={index}
                        to={menu.path}
                        className={({ isActive }) => `${isActive ? 'text-[#f97316] font-semibold' : ''} uppercase text-lg relative group hover:text-orange-500 tracking-widest transition-all duration-500`}
                    >
                        {menu.text}
                        <span className='absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full'></span>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default SiteMenu