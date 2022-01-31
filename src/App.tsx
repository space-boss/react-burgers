import React from "react";
import styles from "./app.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";

const BURGER_API_URL = "https://norma.nomoreparties.space/api/ingredients";

/* import { data } from "./utils/data"; */

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");

  React.useEffect(() => {
    const getIngredients = () => {
      fetch(BURGER_API_URL)
        .then((res) => {
          setIsLoading(true);
          return res.json();
        })
        .then((items) => {
          console.log(items);
          setIsLoading(false);
          setData(items.data);
        })
        .catch((err) => {
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
