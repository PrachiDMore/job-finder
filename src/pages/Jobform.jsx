import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios'

const Jobform = () => {

    const initialFormState = {
        title: "",
        post: "",
        description: "",
        salary: 0,
        experience: "",
        isAvailable: true,
        criteria: "",
    }

    const [formState, setFormState] = useState(initialFormState)
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios('http://localhost:5000/job/create', {
            method: "POST",
            data: { ...formState, creatorID: "64281666178828da024d27fe" }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <Navbar />
            <section className='w-screen flex flex-col px-24 py-7 bg-black Poppins text-white'>
                <h1 className='text-3xl font-semibold text-center'>Create Jobs</h1>
                <div className='grid grid-cols-2 gap-7 pt-4'>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="title">Title:</label>
                        <input onChange={handleChange} className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='title' type="text" placeholder='Enter the title.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="post">Post:</label>
                        <input onChange={handleChange} className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='post' type="text" placeholder='Enter the post.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="criteria">Criteria:</label>
                        <input onChange={handleChange} className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='criteria' type="text" placeholder='Enter the criteria.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="experience">Experience:</label>
                        <input onChange={handleChange} className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='experience' type="text" placeholder='Enter the experience.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="salary">Salary:</label>
                        <input onChange={handleChange} className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='salary' type="number" placeholder='Enter the salary.' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='cursor-pointer mb-1' htmlFor="isAvailable">Available:</label>
                        <select className='bg-white bg-opacity-10  py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' id='isAvailable'>
                            <option className='text-black' value={true}>Available</option>
                            <option className='text-black' value={false}>Unavailable</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col mt-7'>
                    <label className='cursor-pointer mb-1' htmlFor="description">Description:</label>
                    <textarea onChange={handleChange} id='description' className='bg-white bg-opacity-10 h-[300px] resize-none py-2 px-4 rounded-md outline-none border-2 border-white border-opacity-10' type="text" placeholder='Enter the description.'></textarea>
                </div>
                <div className='flex'>
                    <button onClick={handleSubmit} type="button" className='px-7 py-2 mt-7 mx-auto rounded-2xl bg-white hover:bg-gray-200 text-black duration-300 outline-none'>Create Job</button>
                </div>
            </section>
        </>
    )
}

export default Jobform