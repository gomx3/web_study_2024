import { useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import InputSection from "../components/InputSection";
import useCustomFetch from "../hooks/useCustomFetch";
import TodoItem from "../components/TodoItem";
import SearchSection from "../components/SearchSection";
import { useNavigate } from "react-router-dom";

function Home() {
  const [queryParam, setQueryParam] = useState("");
  const url = queryParam === "" ? "/todo" : `/todo?title=${queryParam}`;

  const { data, isLoading, isError } = useCustomFetch(url);
  const todos = data?.data[0] || [];

  const navigate = useNavigate();

  if (isError) {
    return <h1>error ☠️</h1>;
  }

  return (
    <Container>
      <InputSection />
      <SearchSection setQueryParam={setQueryParam} />
      {!isLoading ? (
        <Wrapper>
          <ClipLoader />
          <Message>게시글을 불러오는 중입니다...</Message>
        </Wrapper>
      ) : todos.length === 0 ? (
        <Wrapper>
          <Message>검색명에 해당하는 to-do가 없습니다.</Message>
          <Btn
            onClick={() => {
              navigate(`/`, {
                replace: false,
                state: {},
              });
              window.location.reload();
            }}
          >
            돌아가기
          </Btn>
        </Wrapper>
      ) : (
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
const Message = styled.p`
  font-family: roboto;
  font-size: 14px;
  margin-bottom: 30px;
`;
const Btn = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  margin: 3px 0px 3px 4px;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;
