import React from 'react';
import { Link } from 'react-router-dom';

export const VideoTitle = ({ title, overview, id }) => {
    return (
        <div className='w-screen aspect-video pt-32 sm:px-12 px-4 flex flex-col bg-opacity-0 text-white absolute bg-gradient-to-r from-black'>
            {/* <div className='flex flex-col'>
                <h1 className='sm:text-4xl text-2xl font-bold mx-3 text-left sm:w-2/5'>{title}</h1>
                <p className='py-6 text-md no-scrollbar overflow-y-scroll mx-3 hidden lg:flex w-1/4 max-h-[27%]'>{overview}</p>
                <div className='my-3'>
                    <button className='bg-white text-black sm:px-8 px-4 sm:py-4 py-2 text-xl hover:bg-opacity-70 rounded-md mx-3 my-2 font-bold'>Play</button>
                    <button className='bg-gray-500 text-white sm:px-8 px-4 sm:py-4 py-2 text-lg bg-opacity-100 hover:bg-opacity-70 rounded-md mx-3 my-2'>More info</button>
                </div>
            </div> */}
            <h1 className='sm:text-4xl text-2xl font-bold mx-3 text-left sm:w-2/5'>{title}</h1>
            <p className='py-6 text-md no-scrollbar overflow-y-scroll mx-3 hidden md:flex w-1/4 max-h-[27%]'>{overview}</p>
            <div className='my-3'>
                <Link to={'/movie/'+id}>
                    <button className='bg-white text-black sm:px-8 px-4 sm:py-4 py-2 text-xl hover:bg-opacity-70 rounded-md mx-3 my-2 font-bold'>Play</button>
                </Link>
                <Link to={'/movie/'+id}>
                    <button className='bg-gray-500 text-white sm:px-8 px-4 sm:py-4 py-2 text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md mx-3 my-2'>More info</button>
                </Link>
            </div>
        </div>
    )
}

export default VideoTitle;