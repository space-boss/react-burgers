import React, { useCallback } from "react";

import styles from "./app.module.css";
import AppHeader from "./AppHeader/AppHeader";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");

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

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
