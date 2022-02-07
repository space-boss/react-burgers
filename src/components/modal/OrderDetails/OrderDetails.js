import styles from "./orderDetails.module.css";
import checkImg from "../../../images/order-done.svg";

export const OrderDetails = () => {
  return (
    <div className={`${"mt-4 mb-15"} ${styles.container}`}>
      <div className={`${"text text_type_digits-large"} ${styles.orderId}`}>
        034536
      </div>
      <div className={`${"text text_type_main-medium mt-8 "}`}>
        идентификатор заказа
      </div>
      <img className={"mt-15 mb-15"} src={checkImg} alt="check" />
      <div className={`${"text text_type_main-small"} ${styles.note}`}>
        Ваш заказ начали готовить
      </div>
      <div
        className={`${"text text_type_main-small text_color_inactive mt-2"}`}
      >
        Дождитесь готовности на&nbsp;орбитальной станции
      </div>
    </div>
  );
};
