import React from 'react'
import Navbar from './Navbar'

const Home = () => {
	//  Template Code
	return (
		<>
			<Navbar />
			<section className='section-height w-screen flex bg-black Poppins'>
				<div className='w-[50%] h-full flex flex-col p-24'>
					<h1 className='text-white text-6xl font-medium leading-[70px]'>Find Your Job With Hovin!</h1>
					<p className='text-gray-400 text-sm w-[70%] py-8 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempora ea aperiam, non esse quaerat reiciendis molestias ad cupiditate qui?</p>
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
				<div className='w-[50%] h-full'>

				</div>
			</section>
			<section className='p-8 h-screen w-screen flex flex-col items-center bg-white Poppins'>
				<h3 className='text-xl font-extralight text-gray-400'>How It Works?</h3>
				<h1 className='mt-3 capitalize text-3xl font-semibold text-black'>Easy to use, easy to apply</h1>
			</section>
		</>
	)
}

export default Home
