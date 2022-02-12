import styles from "./modalOverlay.module.css";
import PropTypes from "prop-types";

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

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
