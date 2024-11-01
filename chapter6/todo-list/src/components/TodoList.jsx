import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

function TodoList({ todos, setTodos }) {
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => 
        prev
            .filter((item) => item.id !== id)
            .map((item, index) => ({ ...item, id: index + 1 })) // 아이템 삭제 후 id 업데이트 (재할당)
        );
  };
  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
        prev.map((item) => item.id === id ? {...item, task: text} : item)
    );
    setEditingId('');
  };

  return (
    <StyledTodoList>
        {todos.map((todo, _) => (
          <StyledTodoItem key={todo.id}>
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

            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>수정완료</Button>
            ) : (
              <Button onClick={() => {
                setEditingId(todo.id);
                setEditText(todo.task);
              }}>수정하기</Button>
            )}
          </StyledTodoItem>
        ))}
      </StyledTodoList>
  );
}

export default TodoList;


const StyledTodoList = styled.div`
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