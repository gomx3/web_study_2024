import styled from "styled-components";

import InputBox from "../components/InputBox";
import useCustomFetch from "../hooks/useCustomFetch";
import TodoItem from "../components/TodoItem";

function Home() {
  const { data, isLoading, isError } = useCustomFetch(
    `http://localhost:3000/todo`
  );
  const todos = data?.data[0] || [];

  return (
    <Container>
      <h1>👻 your TO-DO 👻</h1>
      <InputBox />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
