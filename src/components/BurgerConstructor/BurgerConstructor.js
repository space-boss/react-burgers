import React, { useReducer } from "react";
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
import { TotalPriceContext } from "../../services/appContext";

const totalPriceInitialState = { totalPrice: null };

function reducer(state, action) {
  switch (action.type) {
    case "sum":
      return { totalPrice: totalPriceInitialState + action.payload };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function BurgerConstructor() {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);

  const toggleOrderModal = () => {
    setIsOrderModalOpen(!isOrderModalOpen);
  };

  /*   const [totalPrice, setTotalPrice] = React.useState(0); */

  const [totalPriceState, totalPriceDispatcher] = useReducer(
    reducer,
    totalPriceInitialState,
    undefined
  );

  return (
    <>
      <section className={`${styles.section} pt-25 pl-4 pr-4`}>
        <TotalPriceContext.Provider
          value={{ totalPriceState, totalPriceDispatcher }}
        >
          <ConstructorList />
          <div className={`${styles.total} ${"mt-10 pr-2"}`}>
            <div className={`${styles.price} ${"mr-10"}`}>
              <div className={"text text_type_digits-medium mr-2"}>610</div>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" onClick={toggleOrderModal}>
              Оформить заказ
            </Button>
          </div>
        </TotalPriceContext.Provider>
      </section>
      <Modal onClose={toggleOrderModal} isOpen={isOrderModalOpen}>
        <OrderDetails />
      </Modal>
      <ModalOverlay onClick={toggleOrderModal} isOpen={isOrderModalOpen} />
    </>
  );
}

BurgerConstructor.propTypes = {
  /*
  data: PropTypes.arrayOf(dataPropType).isRequired, */
  onClick: PropTypes.func,
};

export default BurgerConstructor;
