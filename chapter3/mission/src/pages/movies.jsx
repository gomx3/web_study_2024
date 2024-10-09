import { Link } from "react-router-dom";
import styled from "styled-components";

const MoviesPage = () => {
    return (
        <Container>
            <TextBox>카테고리</TextBox>
            <MovieList>
                <MovieLink to={'/movies/now-playing'}>현재 상영 중인</MovieLink>
                <MovieLink to={'/movies/popular'}>인기 있는</MovieLink>
                <MovieLink to={'/movies/top-rated'}>높은 평가를 받은</MovieLink>
                <MovieLink to={'/movies/up-coming'}>개봉 예정 중인</MovieLink>
            </MovieList>
        </Container>
    );
};

export default MoviesPage;

const Container = styled.div`
    position: fixed;
    top: 77px;
    left: 150px;
    width: 100%;
    height: 100vh;
    background-color: black;
`
const TextBox = styled.h1`
    margin: 20px;
    color: white;
`
const MovieList = styled.div`
    display: flex;
`
const MovieLink = styled(Link)`
    padding: 7px 10px;
    margin-left: 10px;
    background-color: #121212;
    color: white;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #E50914;
    }
`