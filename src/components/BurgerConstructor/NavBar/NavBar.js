import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import navBarStyle from "./navBar.module.css";

function NavBar() {
  const [current, setCurrent] = React.useState("one");

  return (
    <div className={navBarStyle.menu}>
      <div className={navBarStyle.tab}>
        {" "}
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>{" "}
      </div>
      <div className={navBarStyle.tab}>
        <Tab
          value="two"
          active={current === "two"}
          onClick={setCurrent}
          style={{ minWidth: "200px" }}
        >
          Соусы
        </Tab>
      </div>
      <div className={navBarStyle.tab}>
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

/*    <nav>
      <ul className={navBarStyle.menu}>
        <li className={`${navBarStyle.menuItem} pt-4 pb-4`}>
          <a
            href="#"
            className={`text text_type_main-default ${navBarStyle.menuLink}`}
          >
            Булки
          </a>
        </li>
        <li className={`${navBarStyle.menuItem} pt-4 pb-4`}>
          <a
            href="#"
            className={`text text_type_main-default ${navBarStyle.menuLink}`}
          >
            Соусы
          </a>
        </li>
        <li className={`${navBarStyle.menuItem} pt-4 pb-4`}>
          <a
            href="#"
            className={`text text_type_main-default ${navBarStyle.menuLink}`}
          >
            Начинки
          </a>
        </li>
      </ul>
    </nav> */
