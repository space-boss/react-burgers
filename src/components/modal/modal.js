import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./modal.module.css";
import styles from "./modal.module.css";
import ModalOverlay from "./modalOverlay/modalOverlay";

function Modal(props) {
  const modalOpenedClass = props.isOpen ? styles.modalActive : "";
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  React.useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, []);

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27 && props.isOpen) {
        props.onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });

  return ReactDOM.createPortal(
    <>
      <section
        className={`${styles.modal} ${modalOpenedClass} pt-10 pr-10 pb-15 pl-10`}
      >
        <div className={`${"text text_type_main-large"} ${styles.title}`}>
          {props.title}
        </div>
        <button className={styles.closeButton} onClick={props.onClose}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </section>
      <ModalOverlay onClick={props.onClose} isOpen={props.isOpen} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

export default Modal;
