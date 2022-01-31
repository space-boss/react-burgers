import propTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredientCard.module.css";

function IngredientCard(props) {
  console.log(props.data.image);
  return (
    <div className={`${styles.card} ml-4 mr-2 mt-6 mb-8`}>
      <img src={props.data.image} alt={props.data.name} />
      <Counter />
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
