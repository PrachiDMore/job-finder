import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import {ImSearch} from 'react-icons/im'

export const Jobs = () => {
    return (
        <>
            <Navbar />
            <section className='w-screen flex flex-col px-24 py-7 bg-black Poppins'>
                <div className='w-full flex relative items-center'>
                    <input className='px-8 py-3 rounded-lg outline-none w-full' type="text" name="" id="" placeholder='Search for the job...' />
                    <ImSearch className='text-black absolute right-7'/>
                </div>
                <div>
                    <h1 className='text-white text-xl font-semibold py-5'>Showing 46 Jobs</h1>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    )
}
