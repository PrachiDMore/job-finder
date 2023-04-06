import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='px-10 w-screen nav-height flex bg-black Poppins'>
            <div className='w-[25%] flex items-center justify-center'>
                <Link to="/" className='flex justify-center text-white text-3xl font-bold'>Hovin</Link>
            </div>
            <ul className='text-sm w-[50%] flex justify-evenly text-white items-center px-7'>
                <li className='relative active p-2'>Home</li>
                <li className='p-2'>About</li>
                <li className='p-2'>How it works</li>
                <li className='p-2'>Find jobs</li>
            </ul>
            <div className='w-[25%] flex justify-center items-center p-7'>
                <Link to="/signin" className='px-14 py-3 outline-none text-sm rounded-3xl bg-white text-black hover:bg-gray-200 duration-300'>Login</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar