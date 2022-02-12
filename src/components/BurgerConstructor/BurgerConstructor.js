import React from "react";
import styles from "./burgerConstructor.module.css";
import ConstructorList from "./ConstructorList/ConstructorList";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import ModalOverlay from "../modal/modalOverlay/modalOverlay";
import { OrderDetails } from "../modal/OrderDetails/OrderDetails";
import { dataPropType } from "../../utils/proptypes";

function BurgerConstructor(props) {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);

  const toggleOrderModal = () => {
    setIsOrderModalOpen(!isOrderModalOpen);
  };

  return (
    <>
      <section className={`${styles.section} pt-25 pl-4 pr-4`}>
        <ConstructorList data={props.data} />
        <div className={`${styles.total} ${"mt-10 pr-2"}`}>
          <div className={`${styles.price} ${"mr-10"}`}>
            <div className={"text text_type_digits-medium mr-2"}>610</div>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={toggleOrderModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      <Modal onClose={toggleOrderModal} isOpen={isOrderModalOpen}>
        <OrderDetails />
      </Modal>
      <ModalOverlay onClick={toggleOrderModal} isOpen={isOrderModalOpen} />
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropType).isRequired,
  onClick: PropTypes.func,
};

export default BurgerConstructor;
