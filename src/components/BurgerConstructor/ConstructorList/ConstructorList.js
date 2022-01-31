import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructorList.module.css";

function ConstructorList() {
  return (
    <div className={`${styles.ingredientCards}`}>
      <div className={`${styles.specialCard} pl-5 pr-2`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
        />
      </div>
      <div className={`${styles.unlockedCards} pr-2`}>
        <div className={styles.card}>
          <DragIcon className={styles.icon} type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
        <div className={styles.card}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
        <div className={styles.card}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>
      </div>

      <div className={`${styles.specialCard} pl-5 pr-2`}>
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

export default ConstructorList;
