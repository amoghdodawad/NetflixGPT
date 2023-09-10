import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { clearGptPageBeforeLogOut, toggleGptSearchView } from '../utils/gptSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { clearMovie } from '../utils/movieSlice';

const Header = ({ changeStatus }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const isGptSearchShowed = useSelector(store => store.gpt.showGptSearch);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName} = user;
              dispatch(addUser({
                uid : uid,
                email : email,
                displayName : displayName
              }));
            }
          });
          
          return () => {
            unSubscribe();
          }
    },[])

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            localStorage.setItem('isLoggedIn','false');
            changeStatus(false);
            dispatch(clearMovie());
            dispatch(removeUser());
            dispatch(clearGptPageBeforeLogOut());
            navigate('/');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    const handleGPTSearch = () => {
      dispatch(toggleGptSearchView());
    }

    return (
        <div className='fixed w-screen bg-gradient-to-br from-black z-30 flex justify-between'>
            <img src={NETFLIX_LOGO} alt='logo' className='w-40'></img>
            
            {user && <div className='flex justify-center items-center'>
                <div className='hidden sm:flex items-center mx-4 bg-transparent text-white'>
                    Hello {user.displayName}
                </div>
                <button className='text-white mx-2' onClick={handleGPTSearch}>{isGptSearchShowed ? 'Home' : 'GPT Search'}</button>
                <button className='text-white bg-black p-4' value={'Sign out'} onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    );
}

export default Header;