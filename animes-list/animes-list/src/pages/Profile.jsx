import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export function Profile({ animeData }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!animeData) {
      navigate("/");
    }
  }, []);

  if (!animeData) {
    return null;
  }
  console.log(animeData)
  return (
    <>
      <Navbar hideSearch />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={animeData.title}
          height="140"
          image={animeData.images.jpg.large_image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {animeData.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Rated: {animeData.rating}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Score: {animeData.score}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Episodes: {animeData.episodes}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" sx={{ width: "100px", backgroundColor: "#1976D2", color: "white", margin: "auto", ":hover": { opacity: "0.7", backgroundColor: "#1976D2", color: "white" } }} onClick={() => navigate("/")}>Back</Button>

        </CardActions>
      </Card>
    </>
  );
}
