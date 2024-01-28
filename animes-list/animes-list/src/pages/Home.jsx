import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid } from '@mui/material';
import AnimeCard from '../components/AnimeCard';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export const Home = ({ setAnimeData }) => {

    const [animes, setAnimes] = useState([]);

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const baseUrl = "https://api.jikan.moe/v4";
    // const characterUrl = `/anime/${id}/characters`;
    // const staffUrl = `/anime/${id}/staff`;
    // const episodeUrl = `/anime/${id}/episodes`;
    // const newsUrl = `/anime/${id}/news`;
    // const forumUrl = `/anime/${id}/forum`;
    // const videosUrl = `/anime/${id}/videos`;
    // const pictureUrl = `/anime/${id}/pictures`;

    const getAnimes = () => {
        axios
            .get(`${baseUrl}/anime`)
            .then((res) => setAnimes(res.data.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getAnimes();
    }, []);

    console.log(animes)

    const animePickHandler = (animeData) => {
        setAnimeData(animeData);
        navigate("/profile");
    }

  return (
    <>
        <Navbar search={search} setSearch={setSearch} />
        <Container>
            <Grid container spacing={2}>
                {animes
                .filter((anime) => anime.title.toLowerCase().startsWith(search.toLowerCase()))
                .map((anime, key) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                        <Box onClick={() => animePickHandler(anime)}>
                            <AnimeCard title={anime.title} image={anime.images.jpg.large_image_url} score={anime.score} genres={anime.genres} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
  )
};
