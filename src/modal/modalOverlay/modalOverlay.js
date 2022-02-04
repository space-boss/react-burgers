import styles from "./modalOverlay.module.css";

const ModalOverlay = (props) => {
  const modalOverlayOpenedClass = props.isOpen ? styles.modalOverlayActive : "";

  return (
    <div
      onClick={props.onClick}
      className={`${styles.overlay} ${modalOverlayOpenedClass}`}
      id="modal-overlay"
    ></div>
  );
};

export default ModalOverlay;
