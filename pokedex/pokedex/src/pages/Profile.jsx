import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Container, Paper, Typography } from '@mui/material';
import PokemonTable from '../components/PokemonTable';

const Profile = ({ pokemonData }) => {
  const { name, sprites } = pokemonData
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant='h5'>{name}</Typography>
            <Box display="flex" m={5}>
              <Box component="img" src={sprites.front_default} width="100%" height="100%" />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Profile;