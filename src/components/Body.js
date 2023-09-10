import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviePage from './MoviePage';
import Protected from './Protected';
import { useState } from 'react';

const Body = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const changeStatus = (status) => {
        console.log(status,isLoggedIn);
        setIsLoggedIn(status);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Login changeStatus={changeStatus}/>
                }/>
                <Route path='/browse' element={
                    <Browse changeStatus={changeStatus}/>
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