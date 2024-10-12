import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';

export const themes = {
  light: {
    background: "#f9f9f9",
    color: "#000",
    borderColor: "#ddd"
  },
  dark: {
    background: "#1c1c1c",
    color: "#ccc",
    borderColor: "#aaa"
  }
};

function App() {

  const [theme, setTheme] = useState('dark');
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  // 1. 할 일 추가
  const addTodo = () => {
    if (text.trim().length === 0) { alert('빈 문자는 등록이 불가능합니다.'); }
    else {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos((prev) => [
        ...prev,
        {id: newId, task: text },
      ]);
      setText('');
    }
  }; 

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme === 'light' ? 'dark mode' : 'light mode')
  }

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider theme={themes[theme]}>
        <>
          <Container>
            <Section>
              <h1>To-Do⭐</h1>
              <Toggle toggleTheme={toggleTheme}/>
            </Section>
            <InputForm onSubmit={handleSubmit}>
              <Input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='할 일을 입력하세요'
              />
              <Button onClick={addTodo}>등록</Button>
            </InputForm>
            <TodoList 
              todos={todos}
              setTodos={setTodos}
            />
          </Container>
        </>
      </ThemeProvider>
    </div>
  )
}

export default App;


const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  border-radius: 15px;
  ${({ theme }) => `
    background-color: ${theme.background};
    color: ${theme.color};
  `}
`;

const InputForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;