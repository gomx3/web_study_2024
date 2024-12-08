import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculateTotal, clearCart } from "../features/cart/cartSlice";
import { useEffect } from "react";
import styled from "styled-components";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <section>
      <header style={{ paddingTop: "20px" }}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            fontWeight: "lighter",
          }}
        >
          선택한 음반 목록
        </h3>
      </header>
      <ListWrapper>
        {cartItems.length === 0 ? (
          <p>비어 있는... ///</p>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })
        )}
      </ListWrapper>
      <footer>
        <hr />
        <TotalWrapper>
          <div style={{margin: "0 50px"}}>
            <h4 style={{fontWeight: "lighter"}}>총 가격 <span style={{fontWeight: "bold"}}>\{total}</span></h4>
          </div>
          <CartResetBtn style={{margin: "0 50px"}}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            장바구니 초기화
          </CartResetBtn>
        </TotalWrapper>
      </footer>
    </section>
  );
};

export default CartContainer;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CartResetBtn = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 15px;
`