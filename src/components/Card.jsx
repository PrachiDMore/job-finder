import moment from 'moment/moment'
import React from 'react'

const Card = ({data}) => {
    const date = new Date(data.createdAt)
    return (
        <>
            <div className='bg-white bg-opacity-5 w-auto h-auto text-white p-5 rounded-lg border border-gray-200 border-opacity-30'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='text-lg font-semibold'>{data?.title}</h1>
                        <p className='text-sm text-gray-400'>{data.creatorID.firstname} {data.creatorID.lastname}</p>
                    </div>
                    <p className='text-xs text-gray-400'>{moment(date).fromNow()}</p>
                </div>
                <p className='py-3 text-sm'>{data.description.slice(0, 100)}...</p>
                <button className='px-7 py-2 text-xs rounded-2xl bg-white hover:bg-gray-200 text-black duration-300 outline-none'>Apply</button>
            </div>
        </>
    )
}

export default Card