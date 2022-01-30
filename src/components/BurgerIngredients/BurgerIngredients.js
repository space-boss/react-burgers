import ingredientStyle from "./burgerIngredients.module.css";
import IngredientsList from "./IngredientsList/IngredientsList";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  return (
    <section className={`${ingredientStyle.section} pt-25 pl-4 pr-4`}>
      <IngredientsList />
      <div className={`${ingredientStyle.total} ${"mt-10 pr-2"}`}>
        <div className={`${ingredientStyle.price} ${"mr-10"}`}>
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

export default BurgerIngredients;
