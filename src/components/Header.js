import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { clearMovie } from '../utils/movieSlice';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    useEffect(()=>{
        // console.log('Changed');
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const { uid, email, displayName} = user;
              dispatch(addUser({
                uid : uid,
                email : email,
                displayName : displayName
              }));
                navigate('/browse');
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate('/');
            }
          });
          
          return () => {
            unSubscribe();
          }
    },[])

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Logged out');
            dispatch(clearMovie());
            // navigate('/');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    return (
        <div className='fixed w-screen bg-gradient-to-br from-black z-30 flex justify-between'>
            <img src={NETFLIX_LOGO} alt='logo' className='w-40'></img>
            
            {user && <div className='flex justify-center items-center'>
                <div className='hidden sm:flex items-center mx-4 bg-transparent text-white'>
                    Hello {user.displayName}
                </div>
                <button className='text-black bg-red-500 p-4' value={'Sign out'} onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    );
}

export default Header;