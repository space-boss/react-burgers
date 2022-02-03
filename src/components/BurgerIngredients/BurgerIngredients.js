import React from "react";
import propTypes from "prop-types";
import styles from "./burgerIngredients.module.css";
import NavBar from "./NavBar/NavBar";
import IngredientCard from "./IngredientCard/IngredientCard";

function BurgerIngredients(props) {
  const bunsRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainsRef = React.useRef(null);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <NavBar bunsRef={bunsRef} sauceRef={sauceRef} mainsRef={mainsRef} />
      <div className="mt-10" ref={bunsRef}>
        <h2 className="text text_type_main-medium mb-6">Булки</h2>
        <div className={`${styles.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "bun") {
              return (
                <IngredientCard
                  onCardClick={props.onCardClick}
                  data={item}
                  key={item._id}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="mt-10" ref={sauceRef}>
        <h2 className="text text_type_main-medium mb-6">Соусы</h2>
        <div className={`${styles.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "sauce") {
              return (
                <IngredientCard
                  onCardClick={props.onCardClick}
                  data={item}
                  key={item._id}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="mt-10" ref={mainsRef}>
        <h2 className="text text_type_main-medium mb-6">Начинки</h2>
        <div className={`${styles.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "main") {
              return (
                <IngredientCard
                  onClick={props.onCardClick}
                  data={item}
                  key={item._id}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
