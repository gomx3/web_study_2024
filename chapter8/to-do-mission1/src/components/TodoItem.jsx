import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DelButton from "./buttons/DelButton";
import CompleteEditButton from "./buttons/CompleteEditButton";
import EditInput from "./items/EditInput";
import CheckBox from "./items/CheckBox";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const navigate = useNavigate();

  const handleEditBtn = () => {
    setIsEditing(true);
    setEditTitle("");
    setEditContent("");
    setEditChecked(false);
  };

  return (
    <ItemWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CheckBox todoId={todo.id} title={todo.title} content={todo.content} checked={todo.checked} />
        <TextWrapper>
          {isEditing ? (
            <>
              <EditInput defaultText={todo.title} setEditText={setEditTitle} />
              <EditInput defaultText={todo.content} setEditText={setEditContent} />
            </>
          ) : (
            <>
              <TitleNavigate
                onClick={() => {
                  navigate(`/todo/${todo.id}`, {
                    replace: false,
                    state: {},
                  });
                }}
              >
                {todo.title}
              </TitleNavigate>
              <ContentText>{todo.content}</ContentText>
            </>
          )}
        </TextWrapper>
      </div>
      <BtnWrapper>
        {isEditing ? (
          <CompleteEditButton
            todoId={todo.id}
            title={editTitle}
            content={editContent}
            checked={todo.checked}
          />
        ) : (
          <>
            <Btn onClick={handleEditBtn}>수정</Btn>
            <DelButton todoId={todo.id} />
          </>
        )}
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
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const TitleNavigate = styled.div`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const ContentText = styled.div`
  font-size: 14px;
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
  
  &:hover {
    cursor: pointer;
  }
`;
