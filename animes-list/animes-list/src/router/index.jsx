import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

const Router = () => {
    const [animeData, setAnimeData] = useState();

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setAnimeData={setAnimeData} />} /> 
                <Route path='/profile' element={<Profile animeData={animeData} />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;