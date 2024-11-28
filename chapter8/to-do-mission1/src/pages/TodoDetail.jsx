import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import DelButton from "../components/buttons/DelButton";
import CompleteEditButton from "../components/buttons/CompleteEditButton";
import ClipLoader from "react-spinners/ClipLoader";
import EditInput from "../components/EditInput";

const TodoDetail = () => {
  const { todoId } = useParams();

  const { data, isLoading, isError } = useCustomFetch(`/todo/${todoId}`);
  const todo = data?.data || [];

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
    <>
      {isLoading ? (
        <ClipLoader />
      ) : (
        <>
          <TextBox>id: {todo.id}</TextBox>
          {isEditing ? (
            <>
              <EditInput defaultText={todo.title} setEditText={setEditTitle} />
              <EditInput defaultText={todo.content} setEditText={setEditContent} />
            </>
          ) : (
            <>
              <TextBox>{todo.title}</TextBox>
              <TextBox>{todo.content}</TextBox>
            </>
          )}
          <TextBox>{todo.createdAt}</TextBox>
          {todo.checked ? <TextBox>완료</TextBox> : <TextBox>진행 중</TextBox>}
        </>
      )}
      <BtnWrapper>
        <Btn
          onClick={() => {
            navigate(`/`, {
              replace: false,
              state: {},
            });
          }}
        >
          🏠
        </Btn>
        {isEditing ? (
          <CompleteEditButton
            todoId={todo.id}
            title={editTitle}
            content={editContent}
            checked={false}
          />
        ) : (
          <Btn onClick={handleEditBtn}>수정</Btn>
        )}
        <DelButton todoId={todo.id} />
      </BtnWrapper>
    </>
  );
};

export default TodoDetail;

const TextBox = styled.div`
  font-family: roboto;
  font-size: 15px;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  gap: 5px;
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
