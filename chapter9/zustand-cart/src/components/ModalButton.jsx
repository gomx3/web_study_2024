import styled from "styled-components";
import useCartStore from "../store/cartStore";
import useModalStore from "../store/modalStore";

const ModalButton = () => {
  const { clearCart } = useCartStore();
  const { closeModal } = useModalStore();

  return (
    <div>
      <Btn
        type="button"
        onClick={() => {
          clearCart();
          closeModal();
        }}
      >
        네
      </Btn>
      <Btn type="button" onClick={() => closeModal()}>
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
