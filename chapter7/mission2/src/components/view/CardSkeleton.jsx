import styled, { keyframes } from "styled-components";

const CardSkeleton = () => {
  return (
    <MovieItem>
      <MoviePoster />
      <TitleBox />
      <DescriptionBox />
    </MovieItem>
  );
};

export default CardSkeleton;

const skeleton = keyframes`
    0% {
        opacity: 1;
    }   
    25% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }   
    75% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }   
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
