import React from 'react'
import Navbar from '../components/Navbar'

const Jobform = () => {
    return (
        <>
            <Navbar />
            <section className='w-screen flex flex-col px-24 py-7 bg-black Poppins text-white'>
                <h1 className='text-3xl font-semibold text-center'>Create Jobs</h1>
                <div className='grid grid-cols-2 gap-7 pt-4'>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Title:</label>
                        <input className='text-black py-2 px-4 rounded-md outline-none border-2' type="text" placeholder='Enter the title.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Post:</label>
                        <input className='text-black py-2 px-4 rounded-md outline-none border-2' type="text" placeholder='Enter the post.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Criteria:</label>
                        <input className='text-black py-2 px-4 rounded-md outline-none border-2' type="text" placeholder='Enter the criteria.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Experience:</label>
                        <input className='text-black py-2 px-4 rounded-md outline-none border-2' type="text" placeholder='Enter the experience.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Salary:</label>
                        <input className='text-black py-2 px-4 rounded-md outline-none border-2' type="number" placeholder='Enter the salary.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="">Available:</label>
                        <select className='text-black py-2 px-4 rounded-md outline-none border-2' type="number" >
                            <option value={true}>Available</option>
                            <option value={false}>Unavailable</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col mt-7'>
                    <label className='cursor-pointer mb-1' htmlFor="">Description:</label>
                    <textarea className='h-[300px] resize-none text-black py-2 px-4 rounded-md outline-none border-2' type="text" placeholder='Enter the description.'></textarea>
                </div>
                <div className='flex'>
                    <button className='px-7 py-2 mt-7 mx-auto rounded-2xl bg-white hover:bg-gray-200 text-black duration-300 outline-none'>Create Job</button>
                </div>
            </section>
        </>
    )
}

export default Jobform