import { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";

const ModalContent = () => {
  return (
    <div className="modal modal--small">
      <div className="modal__header">Header</div>
      <div className="modal__body">Body</div>
      <div className="modal__footer">Footer</div>
    </div>
  );
};

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal &&
        createPortal(<ModalContent />, document.getElementById("modalRoot"))}
    </>
  );
};

export default Modal;
