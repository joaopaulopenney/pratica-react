import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import Skeletons from '../components/Skeletons';
import { useNavigate } from 'react-router-dom';

const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for ( var i = 1; i < 200; i++ ) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) => setPokemons(res.data.results))
    //   .catch((err) => console.log(err));
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  }


  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
        <Container maxWidth="false">
          <Grid container spacing={3}>
            {pokemons.length === 0 ? <Skeletons /> :
              pokemons
              .filter((pokemon) => pokemon.data.name.toLowerCase().startsWith(search.toLowerCase())) 
              .map((pokemon, key) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                  <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Container>
    </div>
  )
}

export default Home;