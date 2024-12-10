import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Btn
        type="button"
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}
      >
        네
      </Btn>
      <Btn
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        아니오
      </Btn>
    </div>
  );
};

export default ModalButton;

const Btn = styled.button`
  margin: 0 25px 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 13px;
  font-weight: 300;
  &:hover {
    cursor: pointer;
    color: #ccc;
  }
`;
