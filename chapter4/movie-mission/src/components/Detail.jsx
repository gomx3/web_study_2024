import styled from "styled-components";

import MovieOverview from "./MovieOverview";
import Credits from "./Credits";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Detail = ({ movie }) => {
  console.log(movie);
  const releaseYear = movie.data?.release_date.split("-")[0];

  return (
    <Container>
      <LeftSection>
        <PosterItem>
          <PosterImg
            src={`${IMAGE_BASE_URL}${movie.data?.poster_path}`}
            alt={movie.data?.title}
          />
          <Overlay />
        </PosterItem>
      </LeftSection>

      <RightSection>
        <Title>{movie.data?.title}</Title>

        <Text sytle={{ fontWeight: "thin" }}>{releaseYear}</Text>
        <SmallText>
          장르: {movie.data?.genres.map((genre) => genre.name).join(" ")}
        </SmallText>
        <SmallText>{movie.data?.runtime}분</SmallText>
        <SmallText>
          평점: {movie.data?.vote_average} ({movie.data?.vote_count})
        </SmallText>

        <Text>{movie.data?.tagline}</Text>
        <MovieOverview movie={movie} />

        <Credits movieId={movie.data?.id} />
      </RightSection>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-item: flex-start;
  justify-content: space-between;
  padding: 50px;
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const PosterItem = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
`;

const PosterImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0) 65%,
    rgba(0, 0, 0, 1)
  );
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0;
  }
`;
const Title = styled.h1`
  margin: 0px;
  color: #fff;
`;
// const Overview = styled.p`
//   font-size: 15px;
//   line-height: 1.5;
//   color: #fff;
// `;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 10px 0;
`;
const SmallText = styled.div`
  font-size: 13px;
  color: gray;
  margin-bottom: 3px;
`;
