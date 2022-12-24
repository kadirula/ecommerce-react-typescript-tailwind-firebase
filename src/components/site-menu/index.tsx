import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteMenu: React.FunctionComponent = () => {

    const menus = [
        {
            id: 1,
            text: "Home",
            path: "/"
        },
        {
            id: 2,
            text: "Women's",
            path: "/women"
        },
        {
            id: 3,
            text: "Man's",
            path: "/man"
        },
        {
            id: 4,
            text: "Child's",
            path: "/child"
        },
        {
            id: 5,
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