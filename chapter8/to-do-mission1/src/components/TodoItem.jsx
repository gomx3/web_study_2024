import styled from "styled-components";

const TodoItem = ({ todo }) => {
  return (
    <ItemWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CheckBox type="checkbox" checked={todo.checked} />
        <TextWrapper>
          <TextBox className="title" >{todo.title}</TextBox>
          <TextBox>{todo.content}</TextBox>
        </TextWrapper>
      </div>
      <BtnWrapper>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </BtnWrapper>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 3px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 50vw;
  max-width: 500px;
  min-width: 200px;
`;
const CheckBox = styled.input`
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const TextBox = styled.div`
  font-size: 14px;
  &.title {
    font-weight: bold;
  }
`;
const BtnWrapper = styled.div`
  justify-content: flex-start;
`;
const Btn = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  margin: 3px 0px 3px 4px;
`;
