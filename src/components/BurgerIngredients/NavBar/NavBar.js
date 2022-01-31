import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./navBar.module.css";

function NavBar() {
  const [current, setCurrent] = React.useState("one");

  return (
    <div className={styles.menu}>
      <div className={styles.tab}>
        {" "}
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>{" "}
      </div>
      <div className={styles.tab}>
        <Tab
          value="two"
          active={current === "two"}
          onClick={setCurrent}
          style={{ minWidth: "200px" }}
        >
          Соусы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab
          value="three"
          active={current === "three"}
          onClick={setCurrent}
          style={{ minWidth: "200px" }}
        >
          Начинки
        </Tab>{" "}
      </div>
    </div>
  );
}

export default NavBar;
