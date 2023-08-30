import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [ isSignInForm, setIsSignInForm] = useState(true);

    const handleFormTypeChange = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header/>
            <div className='absolute -z-10'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'>
                </img>
            </div>
            <form className='bg-opacity-80 bg-black w-3/12 absolute my-36 left-0 right-0 mx-auto p-6 text-white rounded-md'>
                <h1 className=' font-bold absolute px-7'>{isSignInForm ? 'Sign in' : 'Sign up'}</h1>
                <div className='flex flex-col items-center px-8 pt-8'>
                    {!isSignInForm && <input type='text' placeholder='Full name' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700 bg-opacity-95'></input>}
                    <input type='text' placeholder='Email address' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700 bg-opacity-95'></input>
                    <input type='password' placeholder='Password' className='py-2 px-3 m-2 rounded-sm w-full bg-gray-700'></input>
                    <button className='py-3 mx-4 my-6 px-3 bg-red-600 rounded-sm font-bold w-full'>{isSignInForm ? 'Sign in' : 'Sign up'}</button>
                </div> 
                <p className='hover:cursor-pointer text-center' onClick={handleFormTypeChange}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign in'}</p>
            </form>
        </div>
    )
}

export default Login