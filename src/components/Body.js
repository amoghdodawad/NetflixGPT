import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviePage from './MoviePage';

const Body = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/browse' element={<Browse/>}/>
                <Route path='/movie/:movieId' element={<MoviePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Body;