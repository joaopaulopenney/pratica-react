import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AnimeCard({ title, image, score, genres }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Score: {score}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genres: {genres.map((genre, key) => (
                      <span key={key} style={{display:"inline"}}>{" " + genre.name}</span>
                    ))} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}