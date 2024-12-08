import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(clearCart());
          // TODO: 모달도 꺼지는 상태를 연결
        }}
      >
        네
      </button>
      <button type="button" onClick={() => {
        // TODO: 모달도 꺼지는 상태를 연결
      }}>
        아니오
      </button>
    </div>
  );
};

export default ModalButton;
