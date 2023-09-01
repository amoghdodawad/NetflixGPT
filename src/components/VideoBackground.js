import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const movieTrailer = useSelector((store) => store.movie?.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <>
            {movieTrailer && <div className=''>
                <iframe className='w-screen aspect-video' src={`https://www.youtube-nocookie.com/embed/${movieTrailer}?autoplay=1&showinfo=0&mute=1&controls=0&loop=1&fs=1&cc_load_policy=2`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>}
        </>
    )
}

export default VideoBackground;