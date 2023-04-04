import React from 'react'

export const Signin = () => {
    return (
        <>
            <section className='h-[100vh] w-[100vw] flex '>
                <div className='w-1/2 flex flex-col h-screen bg-black px-16 py-10'>
                    <p className='text-white text-3xl font-bold pb-9'>Hovin</p>
                    <p className='text-gray-400 font-semibold capitalize'>Start for free</p>
                    <h1 className='py-1 leading-snug text-4xl font-bold text-white'>Create a new account.</h1>
                    <p className='text-gray-400 pb-5'>Already a member? Log in</p>
                    <div className='w-full flex flex-col'>
                        <div className='flex justify-between w-full py-3'>
                            <div className='w-[47%]'>
                                <label className='text-lg text-white' htmlFor="">First name:</label>
                                <input className='w-full text-lg text-white px-4 py-1 rounded-md outline-none bg-gray-800' type="text" placeholder='Enter your first name.' />
                            </div>
                            <div className='w-[47%]'>
                                <label className='text-lg text-white' htmlFor="">Last name:</label>
                                <input className='w-full text-lg text-white px-4 py-1 rounded-md outline-none bg-gray-800' type="text" placeholder='Enter your last name.' />
                            </div>
                        </div>
                        <div className='py-2'>
                            <label className='text-lg text-white' htmlFor="">Email:</label>
                            <input className='w-full text-lg text-white px-4 py-1 rounded-md outline-none bg-gray-800 ' type="email" placeholder='Enter your email.' />
                        </div>
                        <div className='py-2'>
                            <label className='text-lg text-white' htmlFor="">Password:</label>
                            <input className='w-full text-lg text-white px-4 py-1 rounded-md outline-none bg-gray-800 mb-10' type="password" placeholder='Enter your password.' />
                        </div>
                        <button className='w-[40%] mx-auto px-7 py-2 outline-none rounded-md bg-gray-800 text-white text-lg font-semibold hover:bg-gray-900 duration-300'>Create Account</button>
                    </div>
                </div>
            </section>
        </>
    )
}
