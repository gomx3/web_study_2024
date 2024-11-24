import styled from "styled-components";
import CardSkeleton from "./CardSkeleton";

const CardListSkeleton = ({ num }) => {
  return (
      <MovieList>
        {new Array(num).fill(0).map((_, idx) => (
          <CardSkeleton key={idx}/>
        ))}
      </MovieList>
  );
};

export default CardListSkeleton;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;