import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const initialState = {
        email: "",
        password: ""
    }
    const [formstate, setformstate] = useState(initialState);
    const navigate=useNavigate()

    const onchangeTypes = (e) => {
        setformstate({
            ...formstate,
            [e.target.id]: e.target.value
        })
    }

    const signinUser = () => {
        axios("http://localhost:5000/user/signin", {
            method: "POST",
            data: formstate
        }).then((res) => {
            console.log(res);
            navigate("/")
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <>
            <section className='h-[100vh] w-[100vw] flex custom-bg Poppins'>
                <div className='w-1/2 flex flex-col justify-between h-[87vh] px-16 py-10 relative z-10'>
                    <Link to="/" className='text-white text-3xl font-bold'>Hovin</Link>
                    <div>
                        <p className='text-gray-400 uppercase'>Start for free</p>
                        <h1 className='py-1 leading-snug text-5xl font-bold text-white'>Sign In<span className='ml-1 text-blue-600 text-6xl tracking-tighter'>.</span></h1>
                        <p className='text-gray-400 pb-5'>Don't have an account? <Link to="/signup" className='text-blue-600'>Sign Up</Link></p>
                        <div className='w-full flex flex-col'>
                            <div className='py-2 flex flex-col'>
                                <label className=' text-white mb-1' htmlFor="">Email:</label>
                                <input id="email" onChange={onchangeTypes} className='w-full  text-white px-4 py-3 rounded-md outline-none bg-gray-800 ' type="email" placeholder='Enter your email.' />
                            </div>
                            <div className='py-2 flex flex-col'>
                                <label className=' text-white mb-1' htmlFor="">Password:</label>
                                <input id="password" onChange={onchangeTypes} className='w-full text-white px-4 py-3 rounded-md outline-none bg-gray-800' type="password" placeholder='Enter your password.' />
                            </div>
                            <div className='text-right mt-3 mb-6 text-blue-600 hover:cursor-pointer'>forget password?</div>
                            <button className='mx-auto px-10 py-3 outline-none rounded-md bg-gray-800 text-white  font-semibold hover:bg-gray-900 duration-300' onClick={signinUser} >Login</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin;