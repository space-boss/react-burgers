import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructorList.module.css";
import PropTypes from "prop-types";
import { dataPropType } from "../../../utils/proptypes";
import { DataContext } from "../../../services/appContext";
import { useContext } from "react";

function ConstructorList() {
  const { data } = useContext(DataContext);

  return (
    data.length > 0 && (
      <div className={`${styles.ingredientCards}`}>
        <div className={`${styles.bunCard} pl-5 pr-2`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name + " (верх)"}
            price={data[0].price}
            thumbnail={data[0].image_mobile}
            id={data[0]._id}
          />
        </div>
        <div className={`${styles.unlockedCards} pr-2`}>
          {data.map((item, index) => {
            if (item.type !== "bun") {
              return (
                <div className={styles.card} key={item._id}>
                  <DragIcon className={styles.icon} type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                </div>
              );
            }
          })}
        </div>

        <div className={`${styles.bunCard} pl-5 pr-2`}>
          <ConstructorElement
            id={data[0]._id}
            type="bottom"
            isLocked={true}
            text={data[0].name + " (низ)"}
            price={data[0].price}
            thumbnail={data[0].image_mobile}
          />
        </div>
      </div>
    )
  );
}

/* ConstructorList.propTypes = {
  data: PropTypes.arrayOf(dataPropType).isRequired,
}; */

export default ConstructorList;
