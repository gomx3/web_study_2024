import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});

// 이렇게 하면, cartReducer를 useSelector를 통해
// 상태들을 cart라는 이름으로 접근해서 가져올 수 있음