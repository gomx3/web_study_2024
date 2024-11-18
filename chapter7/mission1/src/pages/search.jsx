import { useEffect, useState } from "react";
import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [isMovieExists, setIsMovieExists] = useState(false);

  const { data, isLoading, isError } = useCustomFetch(
    `/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1`
  );

  const handleSearch = () => {
    setQuery(inputValue);
  };

  useEffect(() => {
    if (data.data?.results.length > 0) {
      setIsMovieExists(true);
    } else {
      setIsMovieExists(false);
    }
  }, [data]);

  if (isError) {
    return (
      <Container>
        <h1 style={{ color: "white" }}>에러 발생...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <InputWrapper>
        <StyledInput
          type="text"
          value={inputValue}
          placeholder="영화 제목을 입력해주세요..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Btn onClick={handleSearch}>검색</Btn>
      </InputWrapper>
      {query ? (
        isLoading ? (
          <CardSkeleton num={15} />
        ) : isMovieExists ? (
          <MovieList>
            {data.data?.results.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })}
          </MovieList>
        ) : (
          <p style={{ color: "white" }}>
            '{query}'에 대한 검색 결과가 없습니다.
          </p>
        )
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  position: fixed;
  top: 97px;
  left: 200px;
  width: calc(100% - 200px);
  height: calc(100vh - 97px);
  background-color: black;
  box-sizing: border-box;
  padding: 20px 35px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;
const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
`;
const Btn = styled.button`
  margin-left: 10px;
  padding: 10px;
  width: 70px;
  color: white;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;
  background-color: #ff007c;

  &:hover {
    transition: color 0.3s ease;
    color: black;
  }
`;
