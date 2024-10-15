import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import View from '../../components/View';

const BASE_URL = import.meta.env.VITE_MOVIE_API_URL;
const URL = `${BASE_URL}/movie/top_rated?language=ko-KR&page=1`
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const TopRated = () => {
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
            <TextBox>높은 평가를 받은 작품</TextBox>
            <View movies={movies}/>
        </Container>
    );
};

export default TopRated;

const Container = styled.div`
    position: fixed;
    top: 97px;
    left: 200px;
    width: calc(100% - 200px);
    height: calc(100vh - 97px);
    background-color: black;
`
const TextBox = styled.h1`
    margin: 20px;
    margin-bottom: -5px;
    color: white;
`