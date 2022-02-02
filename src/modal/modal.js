import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./modal.module.css";

function Modal({ children, active, onCloseRequest }) {
  const modalRootEl = React.useRef();
  const [ready, setReady] = React.useState();

  React.useEffect(() => {
    modalRootEl.current = document.createElement("div");

    document.body.appendChild(modalRootEl.current);
    setReady(1); // re-render this component
    return () => modalRootEl.current.remove();
  }, []);

  if (!modalRootEl.current) return null;

  return ReactDOM.createPortal(
    <div className={`modal ${active ? "modalActive" : ""}`}>
      <div className="modalOverlay" onClick={onCloseRequest} />
      <div className="modalContent">{children}</div>
    </div>,
    modalRootEl.current
  );
}

export default Modal;
