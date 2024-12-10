import { useEffect } from "react";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";
import useCartStore from "./store/cartStore";
import useModalStore from "./store/modalStore";

function App() {
  const { cartItems, calculateTotal } = useCartStore();
  const { isOpen }= useModalStore();

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CartContainer />
        {isOpen && (
          <ModalPortal>
            <Modal>
              <h4 style={{ fontWeight: "300" }}>담아두신 모든 음반을 삭제하시겠습니까?</h4>
            </Modal>
          </ModalPortal>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
