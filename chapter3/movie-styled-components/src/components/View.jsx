import { MOVIES } from '../mocks/movies';
import styled from 'styled-components';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200"

const View = () => {
    return (
        <Container>
          <MovieList>
            {MOVIES.results.map((movie) => (
              <MovieItem key={movie.id}>
                <MoviePoster 
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                  alt={movie.title} >
                </MoviePoster>
                <HoverOverlay></HoverOverlay>
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
  justify-content: center;
  padding: 100px;
`

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
`

const MovieItem = styled.div`
  position: relative;
`

const MoviePoster = styled.img`
  width: 100%;
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