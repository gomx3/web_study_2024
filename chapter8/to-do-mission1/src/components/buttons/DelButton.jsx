import styled from "styled-components";
import { deleteTodo } from "../../apis/deleteTodo";
import { useNavigate } from "react-router-dom";

const DelButton = ({ todoId }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteTodo(todoId);
      console.log("Success:", result);
    } catch (error) {
      console.log( error);
    }
    navigate(`/`, {
        replace: false,
        state: {},
    })
    window.location.reload();
  };

  return <Btn onClick={handleDelete}>삭제</Btn>;
};

export default DelButton;

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
