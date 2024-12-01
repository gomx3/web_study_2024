import styled from "styled-components";

const EditInput = ({ defaultText, editText, setEditText }) => {
  return (
    <Input defaultValue={defaultText} value={editText} onChange={(e) => setEditText(e.target.value)} />
  );
};

export default EditInput;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: roboto;
  margin: 3px 0px;
  width: 50vw;
  max-width: 300px;
  min-width: 200px;
`;
