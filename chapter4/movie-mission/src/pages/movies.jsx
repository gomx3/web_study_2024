import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const mametchi = "https://tamagotchi-official.com/tamagotchi/jp/character/2024/05/08/bdkMGPP0UIz3N8TO/04_%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1.png";
const kuchipatchi = "https://tamagotchi-official.com/tamagotchi/jp/character/2024/05/08/4frKfEULjB2o2oXS/05_%E3%81%8F%E3%81%A1%E3%81%B1%E3%81%A3%E3%81%A1.png";
const mimitchi = "https://tamagotchi-official.com/tamagotchi/jp/character/2024/05/08/oCksBD3WOHDqQSTl/06_%E3%81%BF%E3%81%BF%E3%81%A3%E3%81%A1.png";
const flowertchi = "https://tamagotchi-official.com/tamagotchi/jp/character/2024/05/08/fIMTsvU4u8L5a2lA/09_%E3%81%B5%E3%82%89%E3%82%8F%E3%81%A3%E3%81%A1.png";

const MoviesPage = () => {
  return (
    <Container>
      <TextBox>둘러보기</TextBox>
      <CateList>
        <CateLink to={"/movies/now-playing"}>
          <CateImg src={mametchi} alt="현재 상영 중인" />
          <CateText>현재 상영 중인</CateText>
        </CateLink>
        <CateLink to={"/movies/popular"}>
          <CateImg src={kuchipatchi} alt="인기 있는" />
          <CateText>인기 있는</CateText>
        </CateLink>
        <CateLink to={"/movies/top-rated"}>
          <CateImg src={mimitchi} alt="인기 있는" />
          <CateText>높은 평가를 받은</CateText>
        </CateLink>
        <CateLink to={"/movies/upcoming"}>
          <CateImg src={flowertchi} alt="인기 있는" />
          <CateText>개봉 예정 중인</CateText>
        </CateLink>
      </CateList>
    </Container>
  );
};

export default MoviesPage;

const Container = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 240px);
  height: calc(100vh - 97px);
  padding: 20px;
  background-color: black;
`;
const TextBox = styled.h1`
  color: white;
`;
const CateList = styled.div`
  display: flex;
  gap: 10px;
`;
const CateLink = styled(Link)`
  position: relative;
  padding: 7px 10px;
  min-width: 100px;
  background-color: #121212;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff007c;
  }
`;
const CateImg = styled.img`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
`;
const CateText = styled.div`
  position: absolute;
  bottom: 15px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
  text-align: left;
  z-index: 1;
`;
