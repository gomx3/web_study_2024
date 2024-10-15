import { useEffect, useState } from "react";
import styled from "styled-components";

import View from '../components/View';
import { axiosInstance } from "../apis/axios-instance";

const USER_ID = import.meta.env.USER_ID;

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axiosInstance.get(`/account/${USER_ID}/favorite/movies?language=ko-KR&page=1&sort_by=created_at.asc`)
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