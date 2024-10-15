import { useEffect, useState } from "react";
import styled from "styled-components";

import View from '../../components/View';
import { axiosInstance } from "../../apis/axios-instance";

const Popular = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axiosInstance.get(`/movie/popular?language=ko-KR&page=1`)
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <Container>
            <TextBox>인기 있는 작품</TextBox>
            <View movies={movies}/>
        </Container>
    );
};

export default Popular;

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