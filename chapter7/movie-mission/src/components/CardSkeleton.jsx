import styled, { keyframes } from "styled-components";

const CardSkeleton = ({ num }) => {
  return (
    <Container>
      <MovieList>
        {new Array(num).fill(0).map((_, idx) => (
          <MovieItem key={idx}>
            <MoviePoster />
            <TitleBox />
            <DescriptionBox />
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

export default CardSkeleton;

const skeleton = keyframes`
    0% {
        opacity: 1;
    }   
    30% {
        opacity: 0.8;
    }
    50% {
        opacity: 0.5;
    }   
    80% {
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }   
`;
const Container = styled.div`
  height: calc(100vh - 220px);
  overflow-y: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
const MovieItem = styled.div`
  position: relative;
  text-decoration: none;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;
const MoviePoster = styled.div`
  width: 100%;
  aspect-ratio: 2.1 / 3;
  border-radius: 8px;
  background-color: gray;
`;
const TitleBox = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background-color: gray;
`;
const DescriptionBox = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background-color: gray;
`;
