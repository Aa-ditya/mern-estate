import React from 'react'
import { FaSearch } from 'react-icons/Fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className=' bg-slate-200 shadow-md'>
            <div className='flex flex-wrap max-w-6xl justify-between mx-auto p-3 items-center'>
                <Link to="/"><h1 className=' sm:text-xl text-sm'>
                    <span className='font-bold text-slate-500 '>Sahand</span><span className=' font-bold text-slate-700'>Estate</span>
                </h1></Link>
                <form className=' bg-slate-100 p-3 rounded-lg flex items-center '>
                    <input type="text" placeholder='Search...' className=' bg-transparent sm:w-64 w-24 focus:outline-none' />
                    <FaSearch className=' text-slate-700' />
                </form>
                <ul className='flex gap-4'>
                    <Link to="/"><li className=' text-slate-600 font-bold hidden sm:inline hover:underline cursor-pointer'>Home</li></Link>
                    <Link to="/about"> <li className=' text-slate-600 font-bold hidden sm:inline hover:underline cursor-pointer'>About</li></Link>
                    <Link to="/sign-in"> <li className=' text-slate-600 font-bold hover:underline cursor-pointer'>Sign in</li></Link>
                </ul>
            </div>

        </header>
    )
}

export default Header
