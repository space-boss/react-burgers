import React, { useCallback } from "react";
import { OrderDetails } from "../modal/OrderDetails/OrderDetails";
import styles from "./app.module.css";
import AppHeader from "./AppHeader/AppHeader";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import Modal from "../modal/modal";

const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

/* import { data } from "./utils/data"; */

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    const getIngredients = () => {
      setIsLoading(true);
      fetch(BURGER_API_URL)
        .then((res) => {
          return res.json();
        })
        .then((items) => {
          console.log(items);
          setIsLoading(false);
          setData(items.data);
        })
        .catch(() => {
          setIsLoading(false);
          setLoadingError("Не удалось получить данные с сервера");
          console.log(loadingError);
        });
    };
    getIngredients();
  }, []);

  // тут вставляется ссылка на модальный компонент
  const closeModal = () => setShowModal(false);

  const openModal = () => {
    console.log("Clicked!");
    setShowModal(true);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <button onClick={openModal}>Open Modal</button>
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
      <Modal active={showModal} onCloseRequest={closeModal}>
        <div className={styles.Card}>Example Modal Content</div>
      </Modal>
    </div>
  );
}

export default App;
