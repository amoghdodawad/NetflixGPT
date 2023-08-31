import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-40 sm:px-12 px-4 flex flex-col bg-opacity-0 text-white absolute bg-gradient-to-r from-black'>
            <h1 className='sm:text-6xl text-3xl font-bold mx-3 text-left w-2/5'>{title}</h1>
            <p className='py-6 text-lg overflow-hidden mx-3 hidden sm:flex w-1/4'>{overview}</p>
            <div className='my-3'>
                <button className='bg-white text-black sm:px-12 px-4 py-4 text-xl hover:bg-opacity-70 rounded-md mx-3 my-2 font-bold'>Play</button>
                <button className='bg-gray-500 text-white sm:px-12 px-4 py-4 text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md mx-3 my-2'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle;