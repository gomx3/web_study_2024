import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculateTotal, clearCart } from "../features/cart/cartSlice";
import { useEffect } from "react";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <section>
      <header>
        <h2>선택한 음반</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h4>
            총 가격 <span>{total}원</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          장바구니 초기화
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
