import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <MovieNavigate
      onClick={() =>
        navigate(`/movies/${movie.id}`, {
          replace: false,
          state: {},
        })
      }
      key={movie.id}
    >
      <MoviePoster
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <HoverOverlay />
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDate>{movie.release_date}</MovieDate>
    </MovieNavigate>
  );
};

export default Card;

const MovieNavigate = styled.div`
  position: relative;
  text-decoration: none;
`;
const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 2.1 / 3;
  border-radius: 8px;
`;
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
`;
const MovieTitle = styled.div`
  margin-top: 10px;
  font-size: 1.1rem;
  color: #ccc;
  font-weight: bold;
`;
const MovieDate = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 5px;
`;