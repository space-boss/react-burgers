import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./navBar.module.css";

function NavBar(props) {
  const [current, setCurrent] = React.useState("one");

  function handleMenuClick(ref) {
    setCurrent();
    ref.current.scrollIntoView();
  }

  return (
    <div className={styles.menu}>
      <div className={styles.tab}>
        <Tab
          value="one"
          active={current === "one"}
          onClick={() => handleMenuClick(props.bunsRef)}
        >
          Булки
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab
          value="two"
          active={current === "two"}
          onClick={() => handleMenuClick(props.sauceRef)}
          style={{ minWidth: "200px" }}
        >
          Соусы
        </Tab>
      </div>
      <div className={styles.tab}>
        <Tab
          value="three"
          active={current === "three"}
          onClick={() => handleMenuClick(props.mainsRef)}
          style={{ minWidth: "200px" }}
        >
          Начинки
        </Tab>
      </div>
    </div>
  );
}

export default NavBar;
