import styles from "./burgerConstructor.module.css";
import IngredientsList from "./ConstructorList/ConstructorList";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  return (
    <section className={`${styles.section} pt-25 pl-4 pr-4`}>
      <IngredientsList />
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

export default BurgerConstructor;
