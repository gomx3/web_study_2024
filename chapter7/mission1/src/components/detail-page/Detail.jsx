import styled from "styled-components";

import MovieOverview from "./MovieOverview";
import Credits from "./Credits";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Detail = ({ movie }) => {
  const releaseYear = movie?.release_date.split("-")[0];

  return (
    <Container>
      <LeftSection>
        <PosterItem>
          <PosterImg
            src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
            alt={movie?.title}
          />
        </PosterItem>
      </LeftSection>

      <RightSection>
        <Title>{movie?.title}</Title>

        <p style={{ color: "white", margin: "10px 0", fontSize: "20px" }}>
          {releaseYear}
        </p>
        <SmallText>
          {movie?.runtime}분<br />
          장르: {movie?.genres.map((genre) => genre.name).join(", ")}<br />
          평점: {movie?.vote_average} ({movie?.vote_count})
        </SmallText>

        <Tagline>{movie?.tagline}</Tagline>
        <MovieOverview movie={movie} />

        <Credits movieId={movie?.id} />
      </RightSection>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 100%;
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  width: 27%;
  max-width: 500px;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const PosterItem = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
`;

const PosterImg = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  border-radius: 10px;
`;
const Title = styled.h1`
  margin: 0px;
  color: #fff;
`;
const Tagline = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
`;
const SmallText = styled.div`
  font-size: 13px;
  color: gray;
  margin: 10px 0 ;
`;
