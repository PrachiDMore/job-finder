import React from 'react'
import Navbar from '../components/Navbar'

const UpdateProfile = () => {
	return (
		<>
			<Navbar theme={"white"} />
			<section className='section-height w-screen flex bg-white Poppins px-16 flex-col text-black py-6'>
				<h2 className='w-full text-black text-3xl text-center'>Update Profile</h2>
				<div className='h-full py-8'>
					<div className='flex flex-col items-center w-[20vw] '>
						<img src="https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=" className='w-[300px] h-[300px] rounded-full border-2 object-cover' alt="" />
						<button className='mt-4 px-7 py-2 text-sm rounded-lg border-2 border-black text-black outline-none'>Update</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default UpdateProfile
