import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({theme}) => {
const location  = useLocation();
    const routes = [
        {
            link: "/",
            label: "Home"
        },
        {
            link: "/about",
            label: "About"
        },
        {
            link: "/find",
            label: "Jobs"
        },
        {
            link: "/create-job",
            label: "Post A Job"
        },
    ]
  return (
    <>
        <nav className='px-10 w-screen nav-height flex bg-black Poppins border-b border-gray-200 border-opacity-50'>
            <div className='w-[25%] flex items-center justify-center'>
                <Link to="/" className='flex justify-center text-white text-3xl font-bold'>Hovin</Link>
            </div>
            <ul className='text-sm w-[50%] flex justify-evenly text-white items-center px-7'>
                {
                    routes.map((route) => {
                        if (location.pathname === route.link) {
                            return <Link to={route.link} className='relative active p-2'>{route.label}</Link>
                        }else{
                            return <Link to={route.link} className='relative p-2'>{route.label}</Link>
                        }
                    })
                }
            </ul>
            <div className='w-[25%] flex justify-center items-center p-7'>
                <Link to="/signin" className='px-14 py-3 outline-none text-sm rounded-3xl bg-white text-black hover:bg-gray-200 duration-300'>Login</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar