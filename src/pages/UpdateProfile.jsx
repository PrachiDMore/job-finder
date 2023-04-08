import React from 'react'
import Navbar from '../components/Navbar'

const UpdateProfile = () => {
	return (
		<>
			<Navbar theme={"white"} />
			<section className='section-height w-screen flex bg-white Poppins px-16 flex-col text-black py-6'>
				<h2 className='w-full text-black text-3xl text-center'>Update Profile</h2>
				<div className='h-full py-8 flex justify-between'>
					<div className='flex flex-col items-center w-[20vw] '>
						<img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" className='w-[300px] h-[300px] rounded-full border-2 object-cover' alt="" />
						<p className='pt-4 text-2xl font-semibold'>Vishwajeet Deshpande</p>
						<button className='mt-5 px-7 py-2 text-sm rounded-lg border-2 border-black text-black outline-none hover:bg-slate-100 duration-300'>Update</button>
					</div>
					<div className='w-[65vw] h-fit grid grid-cols-2 gap-x-16 gap-y-3'>
						<div>
							<label className='mb-1' htmlFor="">First name:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none ' type="text" placeholder='Enter your first name.' />
						</div>
						<div>
							<label className='mb-1' htmlFor="">Last name:</label>
							<input id="lastname" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none ' type="text" placeholder='Enter your last name.' />
						</div>
						<div>
							<label className='mb-1' htmlFor="">Username:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none hover:cursor-not-allowed' type="text" readOnly={true} />
						</div>
						<div>
							<label className='mb-1' htmlFor="">Email:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none hover:cursor-not-allowed' type="text" readOnly={true} />
						</div>
						<div>
							<label className='mb-1' htmlFor="">Resume:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none text-sm' type="file" />
						</div>
						<div>
							<label className='mb-1' htmlFor="">Last name:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none' type="text" placeholder='Enter your last name.'/>
						</div>
						<div className='col-span-full '>
							<label className='mb-1' htmlFor="">Description:</label>
							<input id="firstName" className='w-full border-2 border-black px-4 py-3 rounded-md outline-none ' type="text" placeholder='Enter description about you or about your work.'/>
						</div>
						
						<div className='w-full col-span-full text-center'>
							<button className='mx-7 mt-4 px-7 py-2 text-sm rounded-lg border-2 border-black text-black outline-none hover:bg-slate-100 duration-300'>Update</button>
							<button className='mx-8 mt-4 px-7 py-2 text-sm rounded-lg border-2 border-black text-black outline-none hover:bg-slate-100 duration-300'>Cancle</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default UpdateProfile
