import { useState, useContext } from "react";
import styled from "styled-components";

import Button from "./components/Button";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./App";

function TodoListApp({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("빈 문자는 등록이 불가능합니다.");
    } else {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos((prev) => [...prev, { id: newId, task: text }]);
      setText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev
        .filter((item) => item.id !== id)
        .map((item, index) => ({ ...item, id: index + 1 }))
    );
  };

  const updateTodo = (id, text, setEditingId) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className={theme}>
      <div>
        <TitleWrapper>
          <h1>TODO🚶🚶🚶</h1>
          <Toggle toggleTheme={toggleTheme} />
        </TitleWrapper>
        <InputForm onSubmit={handleSubmit}>
          <Input
            className={theme}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <Button onClick={addTodo}>할 일 등록</Button>
        </InputForm>
        <ItemList
          className={theme}
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </Container>
  );
}

export default TodoListApp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;

  background-color: ${(props) =>
    props.className === "dark" ? "#212426" : "#fff"};
  color: ${(props) => (props.className === "dark" ? "#fff" : "#000")};
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
