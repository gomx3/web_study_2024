import './App.css'
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들기'},
    {id: 2, task: '워크북 채우기'},
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('빈 문자는 등록이 불가능합니다!');
    }
    else {
      setTodos((prev) => [
        ...prev, // 얕은 복사
        {id: Math.floor(Math.random() * 100) + 2, task: text }, // 추가되는 요소마다 id로 랜덤한 숫자가 들어옴
      ]);
      setText('');
    }
  }; 

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
        prev.map((item) => item.id === id ? {...item, task: text} : item)
    );
    setEditingId('');
  };

  // 렌더링 방지 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class='container'>
      <form class='input-form' onSubmit={handleSubmit}>
        <Input 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='할 일을 입력하세요'
        />
        <Button onClick={addTodo}>할 일 등록</Button>
      </form>
      <div class='todo-list'>
        {todos.map((todo, _) => (
          <div key={todo.id} class='todo-item'>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div class='todo-text'>
                <p>{todo.id}. </p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <div class='todo-text'>
                <p>{todo.id}. </p>
                <Input 
                  task={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>수정완료</Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>수정하기</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;