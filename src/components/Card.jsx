import React from 'react'

const Card = () => {
    return (
        <>
            <div className='bg-gray-800 w-auto h-auto text-white p-5 rounded-lg border border-gray-200 border-opacity-30'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='text-lg font-semibold'>Product Designer</h1>
                        <p className='text-sm text-gray-400'>Cracow, Poland</p>
                    </div>
                    <p className='text-xs text-gray-400'>3 days ago</p>
                </div>
                <p className='py-3 text-sm'>Lorem ipsum dolor, sit amet consectetur. Cum sit cupiditate amet accusantium...</p>
                <button className='px-7 py-2 text-xs rounded-2xl bg-white hover:bg-gray-200 text-black duration-300 outline-none'>Apply</button>
            </div>
        </>
    )
}

export default Card