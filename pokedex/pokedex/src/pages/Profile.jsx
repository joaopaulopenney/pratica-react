import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Chip, Container, Divider, Paper, Typography } from '@mui/material';
import PokemonTable from '../components/PokemonTable';

const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData
  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant='h5'>{name}</Typography>
            <Box display="flex" width="100%">
              <Box component="img" src={sprites.front_default} width="100%" height="100%" />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box component="img" src={sprites.front_female} width="30%" height="30%" />
              <Box component="img" src={sprites.front_shiny} width="30%" height="30%" />
              <Box component="img" src={sprites.front_shiny_female} width="30%" height="30%" />
              <Divider>Ataques</Divider>
              {moves.map((moveData, key) => (
                <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Profile;