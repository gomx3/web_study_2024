import styled from "styled-components";
import { patchTodo } from "../../apis/patchTodo";

const CompleteEditButton = ({ todoId, title, content, checked }) => {
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const result = await patchTodo(todoId, title, content, checked);
      console.log("Success:", result);
    } catch (error) {
      console.log( error);
    }
    window.location.reload();
  };

  return <Btn onClick={handleEdit}>수정 완료</Btn>;
};

export default CompleteEditButton;

const Btn = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  margin: 3px 0px 3px 4px;
  &:hover {
    cursor: pointer;
  }
`;
