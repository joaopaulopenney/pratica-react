import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [animeData, setAnimeData] = useState();
  <>
    <Home setAnimeData={setAnimeData} />
    <Profile animeData={animeData} />
  </>
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
