import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructorList.module.css";
import PropTypes from "prop-types";
import { dataPropType } from "../../../utils/proptypes";

function ConstructorList(props) {
  return (
    props.data.length > 0 && (
      <div className={`${styles.ingredientCards}`}>
        <div className={`${styles.bunCard} pl-5 pr-2`}>
          <button
            className={styles.ingredientCard}
            onClick={props.onClick}
            id={props.data[0]._id}
          >
            <ConstructorElement
              type="top"
              isLocked={true}
              text={props.data[0].name + " (верх)"}
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
              id={props.data[0]._id}
            />
          </button>
        </div>
        <div className={`${styles.unlockedCards} pr-2`}>
          {props.data.map((item, index) => {
            if (item.type !== "bun") {
              return (
                <button
                  key={index}
                  className={styles.ingredientCard}
                  onClick={props.onClick}
                  id={item._id}
                >
                  <div className={styles.card} key={item._id}>
                    <DragIcon className={styles.icon} type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image_mobile}
                    />
                  </div>
                </button>
              );
            }
          })}
        </div>
        <button
          className={styles.ingredientCard}
          id={props.data[0]._id}
          onClick={props.onClick}
        >
          <div className={`${styles.bunCard} pl-5 pr-2`}>
            <ConstructorElement
              id={props.data[0]._id}
              type="bottom"
              isLocked={true}
              text={props.data[0].name + " (низ)"}
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
            />
          </div>
        </button>
      </div>
    )
  );
}

ConstructorList.propTypes = {
  data: PropTypes.arrayOf(dataPropType).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ConstructorList;
