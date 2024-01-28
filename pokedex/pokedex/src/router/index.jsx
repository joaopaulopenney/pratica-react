import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Profile from '../pages/Profile';
import Home from '../pages/Home';

const Router = () => {
  const [pokemonData, setPokemonData] = useState();
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home setPokemonData={setPokemonData} />} />
            <Route path='/profile' element={<Profile pokemonData={pokemonData} />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;