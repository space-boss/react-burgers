import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyle from "./constructorCard.module.css";

function ConstructorCard() {
  return (
    <div className={`${cardStyle.card} ml-4 mr-2 mt-6 mb-8`}>
      <img
        src="https://code.s3.yandex.net/react/code/bun-02.png"
        alt="burger-ingredient"
      />
      <Counter />
      <div className={cardStyle.price}>
        <h3 className="text text_type_main-medium m-2">20</h3>
        <div className={cardStyle.icon}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className="text text_type_main-default">Краторная булка N-200i</p>
    </div>
  );
}

export default ConstructorCard;
