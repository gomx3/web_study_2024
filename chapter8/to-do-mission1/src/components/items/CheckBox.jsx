import styled from "styled-components";
import { patchTodo } from "../../apis/patchTodo";

const CheckBox = ({ todoId, title, content, checked }) => {
  const handleChecked = async (e) => {
    try {
      const result = await patchTodo(todoId, title, content, !checked);
      console.log("Success:", result);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return <StyledBox type="checkbox" checked={checked} onChange={handleChecked} />;
};

export default CheckBox;

const StyledBox = styled.input`
  margin-right: 10px;
`;
