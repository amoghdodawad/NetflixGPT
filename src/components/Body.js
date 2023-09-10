import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviePage from './MoviePage';
import Protected from './Protected';
import { useState } from 'react';
import UnProtected from './UnProtected';

const Body = () => {
    // console.log(localStorage.getItem('isLoggedIn'));
    const [ isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem('isLoggedIn') === 'true' ? true : false);
    // console.log(isLoggedIn);
    const changeStatus = (status) => {
        // console.log(isLoggedIn,status);
        setIsLoggedIn(status);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <UnProtected isLoggedIn={isLoggedIn}>
                        <Login changeStatus={changeStatus}/>
                    </UnProtected>
                }/>
                <Route path='/browse' element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Browse changeStatus={changeStatus}/>
                    </Protected>   
                }/>
                <Route path='/movie/:movieId' element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <MoviePage/>
                    </Protected>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default Body;