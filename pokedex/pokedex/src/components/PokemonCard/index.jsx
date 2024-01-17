import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { typeHandler } from '../../utils';
import { CardActionArea } from '@mui/material';

export default function PokemonCard({ name, image, types }) {

  return (
    <Card sx={{ maxWidth: 345, ":hover": { opacity: "0.7" } }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 200 }}
          image={image}
          title={name}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler(types)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
