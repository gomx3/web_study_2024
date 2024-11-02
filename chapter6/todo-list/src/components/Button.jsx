import React from 'react';
import styled from 'styled-components';

function Button({ children, onClick }) {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  padding: 4px 6px;
  margin-left: 5px;
  border: none;
  border-radius: 12px;
  background-color: #fea24d;
  color: #461220;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;