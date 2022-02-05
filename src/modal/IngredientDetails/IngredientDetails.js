import styles from "./ingredientDetails.module.css";

export const IngredientDetails = (props) => {
  return <h1>Test</h1>;
};

/* export const IngredientDetails = (props) => {
  return (
    <div className={styles.content}>
      <img src={props.ingredientData.image} alt={props.ingredientData.name} />
      <div className={`${"mt-4 text text_type_main-medium"} ${styles.title}`}>
        {props.ingredientData.name}
      </div>
      <div className={`${"mt-8 text_color_inactive"} ${styles.parameters}`}>
        <div className={`${styles.parameter}`}>
          <div
            className={`${"text text_type_main-small"} ${
              styles.parameter__title
            }`}
          >
            Калории, ккал
          </div>
          <div
            className={`${"mt-2 text text_type_digits-default"} ${
              styles.parameter__value
            }`}
          >
            {props.ingredientData.calories}
          </div>
        </div>
        <div className={`${styles.parameter}`}>
          <div
            className={`${"text text_type_main-small"} ${
              styles.parameter__title
            }`}
          >
            Белки, г
          </div>
          <div
            className={`${"mt-2 text text_type_digits-default"} ${
              styles.parameter__value
            }`}
          >
            {props.ingredientData.proteins}
          </div>
        </div>
        <div className={`${styles.parameter}`}>
          <div
            className={`${"text text_type_main-small"} ${
              styles.parameter__title
            }`}
          >
            Жиры, г
          </div>
          <div
            className={`${"mt-2 text text_type_digits-default"} ${
              styles.parameter__value
            }`}
          >
            {props.ingredientData.fat}
          </div>
        </div>
        <div className={`${styles.parameter}`}>
          <div
            className={`${"text text_type_main-small"} ${
              styles.parameter__title
            }`}
          >
            Углеводы, г
          </div>
          <div
            className={`${"mt-2 text text_type_digits-default"} ${
              styles.parameter__value
            }`}
          >
            {props.ingredientData.carbohydrates}
          </div>
        </div>
      </div>
    </div>
  );
};
 */
