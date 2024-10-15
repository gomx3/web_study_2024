import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import View from '../../components/View';

const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const UpComing = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(BASE_URL, {
                headers: {
                    Authorization: VITE_API_KEY
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <Container>
            <TextBox>개봉 예정 중인 작품</TextBox>
            <View movies={movies}/>
        </Container>
    );
};

export default UpComing;

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