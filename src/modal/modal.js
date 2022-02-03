import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./modal.module.css";
import styles from "./modal.module.css";

function Modal(props) {
  const modalOpenedClass = props.isOpen ? styles.modalActive : "";

  return (
    <section
      className={`${styles.modal} ${modalOpenedClass} pt-10 pr-10 pb-15 pl-10`}
    >
      <div className={`${"text text_type_main-large"} ${styles.title}`}>
        Детали ингредиента
      </div>
      <button className={styles.closeButton} onClick={props.onClose}>
        <CloseIcon type="primary" />
      </button>
    </section>
  );
}

export default Modal;
