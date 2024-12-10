import { create } from "zustand";
import cartItems from "../constants/cartItems";

const useCartStore = create((set) => ({
  cartItems: cartItems,
  amount: 0,
  total: 0,

  // 음반 수량 증가
  increase: (itemId) => {
    set((state) => {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return { cartItems: updatedCart };
    });
  },
  // 음반 수량 감소
  decrease: (itemId) => {
    set((state) => {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      return { cartItems: updatedCart };
    });
  },
  // 목록에서 음반 제거
  removeItem: (itemId) => {
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== itemId);
      return { cartItems: updatedCart };
    });
  },
  // 장바구니 비우기
  clearCart: () => {
    set(() => ({ cartItems: [], amount: 0, total: 0 }));
  },
  // 최종 계산
  calculateTotal: () => {
    set((state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      return { amount, total };
    })
  }

}))

export default useCartStore;