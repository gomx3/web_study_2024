import { useState } from "react";
import styled from "styled-components";

const InputBox = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  console.log(title);
  console.log(content);

  const postTodo = ({ title, content }) => {

    const todoData = {
        title: title,
        content: content,
        checked: false,
    }

    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

  };

  return (
    <WrapperForm onSubmit={handelSubmit(postTodo)}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"제목을 입력해주세요"}
      />
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={"내용을 입력해주세요"}
      />
      <Btn onClick={addTodo}>TO-DO 생성</Btn>
    </WrapperForm>
  );
};

export default InputBox;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: roboto;
  margin: 3px 0px;
  width: 300px;
`;
const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  margin: 3px 0px;
  width: 100%;
`;
