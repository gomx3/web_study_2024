import styled from "styled-components";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Detail = ({ movie }) => {
  console.log(movie);

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
        <Overview>{movie.data?.overview}</Overview>
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
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
`;

const PosterImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
    border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0.7), /* 위쪽 그라데이션 */
    rgba(0, 0, 0, 0) 30%, /* 중앙 투명 */
    rgba(0, 0, 0, 0) 70%, /* 중앙 투명 */
    rgba(0, 0, 0, 0.7) /* 아래쪽 그라데이션 */
  );
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0;
  }
`;
const Title = styled.h1`
  margin-bottom: 10px;
  color: #fff;
`;
const Overview = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
`;
