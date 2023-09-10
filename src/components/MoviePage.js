import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es';
import { useNavigate } from 'react-router-dom';
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Header from './Header';

const MoviePage = () => {
    const [ posterPath, setPosterPath ] = useState(null);
    const [ title, setTitle ] = useState('Title');
    const [ description, setDescription ] = useState('Description');

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const params = useParams();
    const { movieId } = params;
    // console.log(movieId);
    useEffect(()=>{
        // console.log(user);
        // if(!user){
        //     console.log('!user');
        //     navigate('/');
        // } else {
        //     console.log('Here');
        // }
        async function main(){
            const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId,API_OPTIONS);
            const json = await data.json();
            console.log(json);
            setPosterPath(json.poster_path);
            setDescription(json.overview);
            setTitle(json.original_title);
            // console.log(json);
        }
        main();
    })
    return (
        <>
        <div className='h-screen flex justify-center items-center bg-red-800'>
            {/* <img src={'https://image.tmdb.org/t/p/w780/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg'} className='w-full h-full fixed'></img> */}
            <div className='bg-red-900 backdrop-blur-2xl rounded-md drop-shadow-md flex flex-wrap justify-evenly items-center mx-2'>
                {/* <div className='flex'> */}
                    {/* <div className='h-1/4 w-full overflow-hidden ml-10'> */}
                        <img src={IMG_CDN_URL+posterPath} className='h-1/2 w-1/4 p-0 m-2' alt={title}></img>
                    {/* </div> */}
                    <div className='flex flex-col items-center justify-center mx-12 my-6 w-1/2 text-white'>
                        <div className='text-2xl font-bold my-4 text-center'>
                            {title}
                        </div>
                        <div className='overflow-y-hidden sm:w-2/3'>
                            {description}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
        </>
    );
};

export default MoviePage;