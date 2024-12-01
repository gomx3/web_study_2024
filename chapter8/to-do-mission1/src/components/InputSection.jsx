import { useState } from "react";
import styled from "styled-components";
import { postTodo } from "../apis/postTodo";

const InputSection = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postTodo(title, content);
      console.log("Success: ", result);
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }
  const isValid = title.trim() !== "" && content.trim() !== "";

  return (
    <FormWrapper onSubmit={handleSubmit}>
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
      <Btn type="submit" disabled={!isValid}>TO-DO 생성</Btn>
    </FormWrapper>
  );
};

export default InputSection;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: roboto;
  margin: 3px 0px;
  width: 50vw;
  max-width: 500px;
  min-width: 200px;
`;
const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  margin: 3px 0px;
  width: 100%;
`;
