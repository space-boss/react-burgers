import styles from "./ingredientDetails.module.css";

export const IngredientDetails = (props) => {
  return (
    props.ingredientContent.length > 0 && (
      <div className={styles.content}>
        <img
          src={props.ingredientContent[0].image_large}
          alt={props.ingredientContent[0].name}
        />
        <div
          className={`${"text text_type_main-medium mt-4"} ${styles.subtitle}`}
        >
          {props.ingredientContent[0].name}
        </div>
        <div className={`${"text_color_inactive mt-8"} ${styles.values}`}>
          <div className={`${styles.value}`}>
            <div
              className={`${"text text_type_main-small"} ${styles.valueTitle}`}
            >
              Калории, ккал
            </div>
            <div className={`${"text text_type_digits-default mt-2 "}`}>
              {props.ingredientContent[0].calories}
            </div>
          </div>
          <div className={`${styles.value}`}>
            <div
              className={`${"text text_type_main-small"} ${styles.valueTitle}`}
            >
              Белки, г
            </div>
            <div className={`${"text text_type_digits-default mt-2"}`}>
              {props.ingredientContent[0].proteins}
            </div>
          </div>
          <div className={`${styles.value}`}>
            <div
              className={`${"text text_type_main-small"} ${styles.valueTitle}`}
            >
              Жиры, г
            </div>
            <div className={`${"text text_type_digits-default mt-2"}`}>
              {props.ingredientContent[0].fat}
            </div>
          </div>
          <div className={`${styles.value}`}>
            <div
              className={`${"text text_type_main-small"} ${styles.valueTitle}`}
            >
              Углеводы, г
            </div>
            <div className={`${"text text_type_digits-default mt-2"}`}>
              {props.ingredientContent[0].carbohydrates}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
