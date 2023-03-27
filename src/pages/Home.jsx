import React from 'react'
import Navbar from '../components/Navbar'
import easy_to_use from '../data/easy_to_use'

const Home = () => {
	//  Template Code
	return (
		<>
			<Navbar />
			{/* Home */}
			{/* <div className='absolute top-20 left-[100px] bg-white h-[400px] w-[400px] bg-opacity-10 rounded-full'></div>
			<div className='absolute top-20 left-[300px] bg-white h-[400px] w-[400px] bg-opacity-10 rounded-full'></div> */}
			<section className='section-height w-screen flex bg-black Poppins'>
				<div className='w-[50%] h-full flex flex-col px-24 pt-36 pb-16'>
					<h1 className='text-white text-6xl font-medium leading-[70px]'>Find Your Job With Hovin!</h1>
					<p className='text-gray-400 text-sm w-[70%] py-8 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempora ea aperiam, non esse quaerat reiciendis molestias ad cupiditate qui?</p>
					<div className='flex flex-col justify-between h-full'>
						<div className='w-[60%] flex justify-between'>
							<button className='px-7 py-3 text-sm rounded-2xl bg-white text-black duration-300 outline-none'>Download</button>
							<button className='px-7 py-3 text-sm rounded-2xl text-white duration-300 outline-none'>Learn More</button>
						</div>
						<div className='flex w-full justify-between pt-24'>
							<div>
								<h1 className='text-gray-400 text-sm'>Users</h1>
								<p className='text-white text-xl'>100k+ Users</p>
							</div>
							<div>
								<h1 className='text-gray-400 text-sm'>Job Vacancy</h1>
								<p className='text-white text-xl'>15K+ Jobs</p>
							</div>
							<div>
								<h1 className='text-gray-400 text-sm'>Experience</h1>
								<p className='text-white text-xl'>5+ Years</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[50%] h-full'>

				</div>
			</section>
			{/* Easy to use */}
			<section className='h-screen w-screen flex flex-col items-center bg-white Poppins px-24 py-16'>
				<h3 className='text-xl font-extralight text-gray-400'>How It Works?</h3>
				<h1 className='mt-3 capitalize text-4xl font-bold text-black'>Easy to use, easy to apply</h1>
				<div className='mt-16 w-full h-full grid grid-cols-3 gap-x-10'>
					{easy_to_use.map((step, index) => {
						return <div className='rounded-3xl h-full w-full'>
							<div className='px-5 pt-8 pb-0 bg-gray-200 rounded-2xl'>
								<img className='rounded-t-xl' src={step.img} alt="" />
							</div>
							<div className='mt-4'>
								<p className='text-sm text-gray-500 font-bold'>{step.step}</p>
								<h3 className='text-xl font-bold mt-2'>{step.title}</h3>
								<p className='mt-3 text-gray-500'>{step.description}</p>
							</div>
						</div>
					})}
				</div>
			</section>

			<footer className='px-32 py-16 bg-black Poppins'>
				<div className='flex border-b-2 pb-14 border-gray-900'>
					<div className='w-1/2 text-white'>
						<h1 className='capitalize text-5xl leading-[60px] w-7/12'>Work with the skills you have!</h1>
					</div>
					<div className='w-1/2 text-white flex justify-end'>
						<div className='w-8/12 flex flex-col'>
							<p className=' leading-7 font-light text-gray-500'>What are you waiting for? let's make your dream come true with us. We will make it easier for you to find your dream job!</p>
							<button className='w-max mt-8 px-12 py-3 text-sm rounded-full bg-white text-black duration-300 outline-none'>Let's Start</button>
						</div>
					</div>
				</div>
				<div className='flex pt-10 border-gray-900'>
					<div className='w-2/4 text-white flex flex-col justify-between'>
						<div>
							<h1 className='capitalize text-4xl font-extrabold leading-[60px] w-7/12'>Hovin</h1>
							<p className='mt-2 text-gray-400 font-light'>Make your dreams come true with us. <br /> Easy to use, Easy to apply!</p>
						</div>
						<p className='mt-2 text-gray-400 font-light'>Copyright @Emoon 2022 All Rights Reserved</p>
					</div>
					<div className='pt-10 w-2/4 text-white grid grid-cols-3'>
						<div className='flex flex-col gap-3'>
							<span className='text-gray-200'>Home</span>
							<span className='text-gray-200'>About</span>
							<span className='text-gray-200'>How It Works</span>
							<span className='text-gray-200'>Find Jobs</span>
						</div>
						<div className='flex flex-col gap-3'>
							<span className='text-gray-200'>Facebook</span>
							<span className='text-gray-200'>Instagram</span>
							<span className='text-gray-200'>LinkedIn</span>
							<span className='text-gray-200'>Twitter</span>
						</div>
						<div className='flex flex-col gap-3'>
							<span className='text-gray-200'>Privacy Policy</span>
							<span className='text-gray-200'>Terms & Conditions</span>
							<span className='text-gray-200'>FAQ</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Home
