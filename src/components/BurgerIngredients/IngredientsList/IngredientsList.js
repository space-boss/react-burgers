import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsListStyle from "./ingredientsList.module.css";

function IngredientsList() {
  return (
    <div className={`${ingredientsListStyle.ingredientCards}`}>
      <div className={`${ingredientsListStyle.specialCard} pl-5 pr-2`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
        />
      </div>
      <div className={`${ingredientsListStyle.unlockedCards} pr-2`}>
        <div className={ingredientsListStyle.card}>
          <DragIcon className={ingredientsListStyle.icon} type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
        <div className={ingredientsListStyle.card}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
        <div className={ingredientsListStyle.card}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
      </div>

      <div className={`${ingredientsListStyle.specialCard} pl-5 pr-2`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
        />
      </div>
    </div>
  );
}

export default IngredientsList;
