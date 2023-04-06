import React from 'react'

const Signin = () => {
    return (
        <>
            <section className='h-[100vh] w-[100vw] flex custom-bg Poppins'>
                <div className='w-1/2 flex flex-col justify-between h-[90vh] px-16 py-10 relative z-10'>
                    <p className='text-white text-3xl font-bold'>Hovin</p>
                    <div>
                        <p className='text-gray-400 uppercase'>Start for free</p>
                        <h1 className='py-1 leading-snug text-5xl font-bold text-white'>Create new account<span className='ml-1 text-blue-600 text-6xl tracking-tighter'>.</span></h1>
                        <p className='text-gray-400 pb-5'>Already a member? <span className='text-blue-600'>Log In</span></p>
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
                </div>
            </section>
        </>
    )
}

export default Signin;