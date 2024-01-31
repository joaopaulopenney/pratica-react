import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Divider } from '@mui/material';

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
      <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{ minWidth: "300px", maxWidth: "300px", minHeight: "500px" }}>
          <CardMedia
            component="img"
            alt={animeData.title}
            height="300px"
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
        <Box sx={{ minHeight: "500px", margin: "20px", minWidth: "350px", maxWidth: "700px" }}>
          <Typography gutterBottom variant="subtitle1" component="div">
              Type: {animeData.type} / Duration: {animeData.duration}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
              Status: {animeData.status}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
              Members: {animeData.members}
          </Typography>
          <Divider />
          <Typography marginTop={6} gutterBottom variant="body2" component="div">
              {animeData.synopsis}
          </Typography>
          <Divider />
          {animeData.studios.map((studio, key) => (
            <Box key={key} marginTop={6}>
              <Typography gutterBottom variant="h6" component="div">
                Studios
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {studio.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
