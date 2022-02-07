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
import { IngredientDetails } from "../modal/IngredientDetails/IngredientDetails";
import { dataPropType } from "../../utils/proptypes";

function BurgerConstructor(props) {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  const [isIngredientModalOpen, setIngredientModalOpen] = React.useState(false);
  const [ingredientModalContent, setIngredientModalContent] = React.useState(
    <></>
  );
  const [itemId, setItemId] = React.useState("");

  const toggleOrderModal = () => {
    setIsOrderModalOpen(!isOrderModalOpen);
  };

  const openIngredientModal = (evt) => {
    const ingredientData = props.data.filter(
      (item) => item._id === evt.currentTarget.id,
      setItemId(evt.currentTarget.id)
    );

    setIngredientModalContent(ingredientData);
    setIngredientModalOpen(true);
  };

  const closeIngredientModal = () => {
    setIngredientModalContent(<></>);
    setIngredientModalOpen(false);
  };

  return (
    <>
      <section className={`${styles.section} pt-25 pl-4 pr-4`}>
        <ConstructorList data={props.data} onClick={openIngredientModal} />
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
      <Modal
        onClose={closeIngredientModal}
        isOpen={isIngredientModalOpen}
        title="Детали ингредиента"
      >
        <IngredientDetails
          ingredientContent={ingredientModalContent}
          itemId={itemId}
        />
      </Modal>
      <ModalOverlay
        onClick={closeIngredientModal}
        isOpen={isIngredientModalOpen}
      />
    </>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropType).isRequired,
};

export default BurgerConstructor;
