import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,

  // 모달 창 열기
  openModal: () => {
    set(() => ({ isOpen: true }));
  },
  // 모달 창 닫기
  closeModal: () => {
    set(() => ({ isOpen: false }));
  },
}))

export default useModalStore;
