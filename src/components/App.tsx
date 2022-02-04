import React, { useCallback } from "react";
import { OrderDetails } from "../modal/OrderDetails/OrderDetails";
import styles from "./app.module.css";
import AppHeader from "./AppHeader/AppHeader";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import Modal from "../modal/modal";
import ModalOverlay from "../modal/modalOverlay/modalOverlay";

const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

/* import { data } from "./utils/data"; */

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.app}>
      <Modal onClose={toggleModal} isOpen={isModalOpen} />
      <ModalOverlay onClick={toggleModal} isOpen={isModalOpen} />
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients onCardClick={toggleModal} data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
