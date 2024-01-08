import React from 'react';
import axios from "axios";
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  return (
    <div>
      <Navbar />
        <Container maxWidth="false">
          <Grid container>
            <Grid item xs={3}>
              <PokemonCard />
            </Grid>
            <Grid item xs={3}>
              <PokemonCard />
            </Grid>
            <Grid item xs={3}>
              <PokemonCard />
            </Grid>
            <Grid item xs={3}>
              <PokemonCard />
            </Grid>
          </Grid>
        </Container>
    </div>
  )
}

export default Home;