import { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../components/view/Card";
import CardListSkeleton from "../components/view/CardListSkeleton";
import { useGetInfiniteSearch } from "../hooks/useGetInfiniteSearch";
import { useInView } from "react-intersection-observer";
import BeatLoader from "react-spinners/BeatLoader";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [isMovieExists, setIsMovieExists] = useState(false);

  const {
    data: movies,
    isPending,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteSearch(query);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleSearch = () => {
    setQuery(inputValue);
  };

  useEffect(() => {
    if (movies?.pages.map((page) => page.results).length > 0) {
      setIsMovieExists(true);
    } else {
      setIsMovieExists(false);
    }

    // 무한 스크롤
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [movies, inView, isFetching, hasNextPage, fetchNextPage]);

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
        isPending ? (
          <CardListSkeleton num={15} />
        ) : isMovieExists ? (
          <MovieList>
            {movies?.pages.map((page) => {
              return page.results.map((movie, _) => {
                return <Card movie={movie} key={movie.id} />;
              });
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
      <Spinner ref={ref}>
        {isFetching && <BeatLoader color="#ffffff" margin={5} />}
      </Spinner>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
const Spinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
