import styled from "styled-components";
import ModalButton from "./ModalButton";

const Modal = ({ children }) => {
  return (
    <aside onClick={(e) => {}}>
      <ModalBox>
        {children}
        <ModalButton />
      </ModalBox>
    </aside>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 50px 10px #eee;
  border-radius: 18px;
  width: 450px;
`;
