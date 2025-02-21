import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className='w-full h-12 sticky top-0 z-10 bg-gray-900'>
            <div className='w-full h-full text-white flex items-center text-lg font-semibold pl-4 md:pl-10'>
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-400" : ""} mx-2`}>Home</NavLink>
                <NavLink to="pastes" className={({isActive}) => `${isActive ? "text-blue-400" : ""} mx-2`}>All Notes</NavLink>
            </div>
        </nav>
    )
}

export default Header
