import React from "react";
import propTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredientCard.module.css";

function IngredientCard(props) {
  const [counterValue, setCounterValue] = React.useState(0);

  const handleCounterClick = () => {
    setCounterValue(counterValue + 1);
  };

  return (
    <div className={`${styles.card} ml-4 mr-2 mt-6 mb-8`}>
      <img
        style={{ cursor: "pointer" }}
        src={props.data.image}
        alt={props.data.name}
      />
      <button className={styles.button} onClick={handleCounterClick}>
        <Counter size="default" count={counterValue} />
      </button>

      <div className={styles.price}>
        <h3 className="text text_type_main-medium m-2">{props.data.price}</h3>
        <div className={styles.icon}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className="text text_type_main-default">{props.data.name}</p>
    </div>
  );
}

IngredientCard.propTypes = {
  data: propTypes.object,
};

export default IngredientCard;
