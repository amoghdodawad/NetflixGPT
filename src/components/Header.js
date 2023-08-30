import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Logged out');
            navigate('/');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    return (
        <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
            <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='w-40'></img>
            
            {user && <div className='flex justify-center items-center'>
                <div className='flex items-center mx-4 bg-transparent'>
                    Hello {user.displayName}
                </div>
                <button className='text-black bg-red-500 p-4' value={'Sign out'} onClick={handleSignOut}>Sign out</button>
            </div>}
        </div>
    );
}

export default Header