import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BACKGROUND_IMAGE } from '../utils/constants';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ changeStatus }) => {
    const [ isSignInForm, setIsSignInForm] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleFormTypeChange = () => {
        setIsSignInForm(!isSignInForm);
    };
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef (null);

    useEffect(()=>{
        // console.log('falsed');
        // changeStatus(false);
        // console.log(user);
        // if(user){
        //     console.log('trued');
        //     changeStatus(true);
        // } else {
        //     console.log('falsed');
        //     changeStatus(false);
        // }
    },[])

    const handleButtonClick = () => {
        const response = checkValidData(email.current.value ,password.current.value);
        setErrorMessage(response);
        if(response) {
            return;
        }

        if(!isSignInForm){
            // Sign up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    updateProfile(user, {
                        displayName: name.current.value
                    })
                    .then(()=>{
                        const { uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({
                            uid : uid,
                            email : email,
                            displayName : displayName
                        }));
                        console.log('Sign up successful');
                        navigate('/browse');
                        // <Navigate replace to='/browse'/>
                        // console.log('trued');
                        localStorage.setItem('isLoggedIn','true');
                        changeStatus(true);
                    })
                    .catch((error)=>{
                        setErrorMessage(error.message);
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + ' ' + errorMessage);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    // console.log('Sign up successful');
                    // console.log('trued');
                    if(!localStorage.getItem('isLoggedIn')){
                        localStorage.setItem('isLoggedIn','true');
                    }
                    changeStatus(true);
                    localStorage.setItem('isLoggedIn','true')
                    navigate('/browse');
                    // <Navigate replace to='/browse'/>
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' ' + errorMessage);
                });
        }
    }

    return (
        <div>
            <Header/>
            <div className='absolute -z-10 h-full w-full'>
                <img src={BACKGROUND_IMAGE} alt='logo' className='h-full w-full scale-150 sm:scale-100 overflow-hidden'>
                </img>
            </div>
            <form className='bg-opacity-80 bg-black lg:w-2/6 md:w-3/6 sm:w-4/6 w-3/4 absolute my-36 left-0 right-0 mx-auto p-6 text-white rounded-md' onSubmit={(event) => {
                event.preventDefault();
            }}>
                <h1 className=' font-bold absolute px-7'>{isSignInForm ? 'Sign in' : 'Sign up'}</h1>
                <div className='flex flex-col items-center px-8 pt-8'>
                    {!isSignInForm && <input ref={name} type='text' placeholder='Full name' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700 bg-opacity-95'></input>}
                    <input ref={email} type='text' placeholder='Email address' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700 bg-opacity-95'></input>
                    <input ref={password} type='password' placeholder='Password' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700'></input>
                    <p className={`text-red-700 ${errorMessage && 'p-2 my-2'} rounded-sm font-black text-lg`}>{errorMessage}</p>
                    <button className='py-3 mx-4 my-6 px-3 bg-red-600 rounded-sm font-bold w-full' onClick={handleButtonClick}>{isSignInForm ? 'Sign in' : 'Sign up'}</button>
                </div> 
                <p className='hover:cursor-pointer text-center' onClick={handleFormTypeChange}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign in'}</p>
            </form>
        </div>
    )
}

export default Login