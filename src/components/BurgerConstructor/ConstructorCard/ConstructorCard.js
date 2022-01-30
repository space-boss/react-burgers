import propTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyle from "./constructorCard.module.css";

function ConstructorCard(props) {
  console.log(props.data.image);
  return (
    <div className={`${cardStyle.card} ml-4 mr-2 mt-6 mb-8`}>
      <img src={props.data.image} alt={props.data.name} />
      <Counter />
      <div className={cardStyle.price}>
        <h3 className="text text_type_main-medium m-2">{props.data.price}</h3>
        <div className={cardStyle.icon}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className="text text_type_main-default">{props.data.name}</p>
    </div>
  );
}

ConstructorCard.propTypes = {
  data: propTypes.object,
};

export default ConstructorCard;
