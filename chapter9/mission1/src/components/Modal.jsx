import ModalButton from "./ModalButton";

const Modal = ({ children }) => {
  return (
    <aside onClick={(e) => {}}>
      <div>
        {children}
        <ModalButton />
      </div>
    </aside>
  );
};

export default Modal;
