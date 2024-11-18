import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { useGetCredits } from "../../hooks/queries/useGetCredits";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Credits = ({ movieId }) => {
  const { data, isPending, isError } = useQuery({
    queryFn: () => useGetCredits({ movieId }),
    queryKey: ['credits', movieId],
    cacheTime: 10000,
    staleTime: 10000,
  })

  return (
    <Container>
      <CastList>
        {data?.cast.map((cast) => (
          <CastItem key={cast.cast_id}>
            <ImgContainer>
              <CastImg
                src={`${IMAGE_BASE_URL}${cast.profile_path}`}
                alt={cast.name}
              />
            </ImgContainer>
            <NameText>{cast.name}</NameText>
            <CharText>{cast.character.replace(" (voice)", "")}</CharText>
          </CastItem>
        ))}
      </CastList>
    </Container>
  );
};

export default Credits;

const Container = styled.div`
  height: 300px;
  margin-top: 30px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  gap: 10px;
  padding: 0;
`;
const CastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 85px;
  height: auto;
  margin-bottom: 10px;
`;
const ImgContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const CastImg = styled.img`
  width: 60px;
`;
const NameText = styled.div`
  font-size: 15px;
  color: #fff;
  margin: 5px 0;
`;
const CharText = styled.div`
  font-size: 12px;
  color: gray;
`;
