import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function PokemonTable({ pokemonData }) {
    const { height, weight } = pokemonData
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Altura</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Tipo</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {height}
              </TableCell>
              <TableCell>
                {weight}
              </TableCell>
              <TableCell>
                sdsadasdsa
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
