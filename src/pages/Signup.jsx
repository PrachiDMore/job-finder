import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const initialState = {
        firstName :"",
        lastName : "",
        email : "",
        password : ""
    }
    const [formstate, setformstate] = useState(initialState);

    const onchangeTypes = (e) => {
        setformstate({
            ...formstate,
            [e.target.id]: e.target.value
        })
    }
    const signupUser = () => {
        axios("http://localhost:5000/user/signup", {
            method: "POST",
            data: formstate
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <section className='h-[100vh] w-[100vw] flex custom-bg Poppins'>
                <div className='w-1/2 flex flex-col justify-between h-[98vh] px-16 py-10 relative z-10'>
                    <Link to="/" className='text-white text-3xl font-bold'>Hovin</Link>
                    <div>
                        <p className='text-gray-400 uppercase'>Start for free</p>
                        <h1 className='py-1 leading-snug text-5xl font-bold text-white'>Create new account<span className='ml-1 text-blue-600 text-6xl tracking-tighter'>.</span></h1>
                        <p className='text-gray-400 pb-5'>Already a member? <Link to="/signin" className='text-blue-600'>Log In</Link></p>
                        <div className='w-full flex flex-col'>
                            <div className='flex justify-between w-full py-3'>
                                <div className='w-[47%] flex flex-col'>
                                    <label className=' text-white mb-1' htmlFor="">First name:</label>
                                    <input id="firstName" onChange={onchangeTypes} className='w-full  text-white px-4 py-3 rounded-md outline-none bg-gray-800' type="text" placeholder='Enter your first name.' />
                                </div>
                                <div className='w-[47%] flex flex-col'>
                                    <label className=' text-white mb-1' htmlFor="">Last name:</label>
                                    <input id="lastname" onChange={onchangeTypes} className='w-full  text-white px-4 py-3 rounded-md outline-none bg-gray-800' type="text" placeholder='Enter your last name.' />
                                </div>
                            </div>
                            <div className='py-2 flex flex-col'>
                                <label className=' text-white mb-1' htmlFor="">Email:</label>
                                <input id="email" onChange={onchangeTypes} className='w-full  text-white px-4 py-3 rounded-md outline-none bg-gray-800 ' type="email" placeholder='Enter your email.' />
                            </div>
                            <div className='py-2 flex flex-col'>
                                <label className=' text-white mb-1' htmlFor="">Password:</label>
                                <input id="password" onChange={onchangeTypes} className='w-full text-white px-4 py-3 rounded-md outline-none bg-gray-800 mb-10' type="password" placeholder='Enter your password.' />
                            </div>
                            <button className='mx-auto px-10 py-3 outline-none rounded-md bg-gray-800 text-white  font-semibold hover:bg-gray-900 duration-300' onClick={signupUser}>Create Account</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;