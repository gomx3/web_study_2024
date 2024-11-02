import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";

function ItemList({ className, todos, deleteTodo, updateTodo }) {
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState("");

  return (
    <Container>
      {todos.map((todo, _) => (
        <StyledTodoItem key={todo.id} className={className}>
          {editingId !== todo.id && (
            <StyledTodoText>
              <p>{todo.id}. </p>
              <p>{todo.task}</p>
            </StyledTodoText>
          )}
          {editingId === todo.id && (
            <StyledTodoText>
              <p>{todo.id}. </p>
              <Input
                task={todo.task}
                onChange={(e) => setEditText(e.target.value)}
              />
            </StyledTodoText>
          )}

          <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
          {editingId === todo.id ? (
            <Button onClick={() => updateTodo(editingId, editText, setEditingId)}>
              완료
            </Button>
          ) : (
            <Button
              onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.task);
              }}
            >
              수정
            </Button>
          )}
        </StyledTodoItem>
      ))}
    </Container>
  );
}

export default ItemList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;

  background-color: ${(props) =>
    props.className === "dark" ? "#212426" : "#fff"};
  color: ${(props) => 
    props.className === "dark" ? "#fff" : "#000"};
`;
const StyledTodoText = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 10px;
  p {
    margin: 0;
    font-size: 16px;
  }
`;
