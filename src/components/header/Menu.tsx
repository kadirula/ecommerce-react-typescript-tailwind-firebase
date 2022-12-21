import React from 'react'

const Menu = () => {

    const menus = [
        {
            text: "Home",
            path: "/"
        },
        {
            text: "Women's",
            path: "/"
        },
        {
            text: "Man's",
            path: "/"
        },
        {
            text: "Child's",
            path: "/"
        },
        {
            text: "Shop",
            path: "/"
        }
    ];

    return (
        <div className='items-center justify-center gap-8 hidden sm:flex'>
            {
                menus.map((menu, index) => (
                    <a href={menu.path} className='font-semibold uppercase text-lg relative group hover:text-orange-500 tracking-widest transition-all duration-500' key={index}>
                        {menu.text}
                        <span className='absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full'></span>
                    </a>
                ))
            }

            {/* Active Menu Item */}
            {/* <a href="#" className='uppercase text-lg relative group text-orange-500 tracking-widest'>
                Home
                <span className='absolute bottom-0 left-0 h-px w-full bg-orange-500 transition-all duration-500'></span>
            </a> */}
        </div>
    )
}

export default Menu