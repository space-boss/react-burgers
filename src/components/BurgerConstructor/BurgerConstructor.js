import styles from "./burgerConstructor.module.css";
import ConstructorList from "./ConstructorList/ConstructorList";
import propTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4`}>
      <ConstructorList data={props.data} />
      <div className={`${styles.total} ${"mt-10 pr-2"}`}>
        <div className={`${styles.price} ${"mr-10"}`}>
          <div className={"text text_type_digits-medium mr-2"}>610</div>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: propTypes.array,
};

export default BurgerConstructor;
