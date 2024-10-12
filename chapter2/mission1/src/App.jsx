import { useState } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들기'},
    {id: 2, task: '워크북 채우기'},
  ]);
  const [text, setText] = useState('');

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) { alert('빈 문자는 등록이 불가능합니다.'); }
    else {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos((prev) => [
        ...prev, // 얕은 복사
        {id: newId, task: text },
        // {id: Math.floor(Math.random() * 100) + 2, task: text },
      ]);
      setText('');
    }
  }; 

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <InputForm onSubmit={handleSubmit}>
        <Input 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='할 일을 입력하세요'
        />
        <Button onClick={addTodo}>할 일 등록</Button>
      </InputForm>
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </Container>
  )
}

export default App;


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 15px;
`;

const InputForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;