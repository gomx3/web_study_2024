import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import View from '../components/View';

const USER_ID = import.meta.env.USER_ID;
const BASE_URL = import.meta.env.VITE_MOVIE_API_URL;
const URL = `${BASE_URL}/account/${USER_ID}/favorite/movies?language=ko-KR&page=1&sort_by=created_at.asc`
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(URL, {
                headers: {
                    Authorization: `Bearer ${VITE_API_KEY}`
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <Container>
            <View movies={movies}/>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    position: fixed;
    top: 97px;
    left: 200px;
    width: calc(100% - 200px);
    height: calc(100vh - 97px);
    background-color: black;
`