import React from 'react'
import Menu from './Menu'
import Action from './Action'

const Header = () => {
    return (
        <div className='bg-slate-100 py-6 shadow-md'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href="#" className='font-righteous text-2xl uppercase transition-all duration-700 text-orange-500 hover:text-orange-700'>E-Commerce</a>
                    <Menu />
                    <Action />
                </div>
            </div>
        </div>
    )
}

export default Header