// import { MOVIES } from '../mocks/movies';
import styled from 'styled-components'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400";

const View = ({movies}) => {
    return (
      <Container>
        <MovieList>
          {movies.data?.results.map((movie) => (
            <MovieItem key={movie.id}>
              <MoviePoster 
                src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                alt={movie.title}
              />
              <HoverOverlay></HoverOverlay>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieDate>{movie.release_date}</MovieDate>
            </MovieItem>
          ))}
        </MovieList>
      </Container>
    );
};

export default View;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  overflow-y: auto;
  max-height: 100vh;
`
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`
const MovieItem = styled.div`
  position: relative;
`
const MoviePoster = styled.img`
  width: 250px;
  height: 350px;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`
const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #00000082;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  &:hover {
    opacity: 1;
  }
`

const MovieTitle = styled.div`
  margin-top: 10px;
  font-size: 1.1rem;
  color: #ccc;
  font-weight: bold;
`

const MovieDate = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 5px;
`