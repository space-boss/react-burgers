import React, { useCallback } from "react";
import styles from "./burgerConstructor.module.css";
import ConstructorList from "./ConstructorList/ConstructorList";
import propTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal";
import ModalOverlay from "../../modal/modalOverlay/modalOverlay";
import { OrderDetails } from "../../modal/OrderDetails/OrderDetails";
import { IngredientDetails } from "../../modal/IngredientDetails/IngredientDetails";

function BurgerConstructor(props) {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  const [isIngredientModalOpen, setIngredientModalOpen] = React.useState(false);
  /*   const [ingredientModalContent, setIngredientModalContent] = React.useState({
    content: <></>,
  }); */

  const toggleOrderModal = () => {
    setIsOrderModalOpen(!isOrderModalOpen);
  };

  const openIngredientModal = () => {
    /*     const ingredientData = props.data.filter(
      (item) => item._id === evt.currentTarget.id
    );
    const ingredientContent = (
      <IngredientDetails ingredientData={ingredientData[0]} />
    );
    setIngredientModalContent({ content: ingredientContent }); */
    setIngredientModalOpen(true);
  };

  const closeIngredientModal = () => {
    /*  setIngredientModalContent(<></>); */
    setIngredientModalOpen(false);
  };

  /*   function handleModalContent(evt) {
    const ingredientData = props.data.filter(
      (item) => item._id === evt.currentTarget.id
    );
    console.log(ingredientData);
    return ingredientData;
  }

  const content = handleModalContent(); */

  /* function handleModalContent(evt) {
    let ingredientModalContent = <></>;

    if (isOrderModalOpen) {
      const ingredientData = props.data.filter(
        (item) => item._id === evt.currentTarget.id
      );
      ingredientModalContent = (
        <IngredientDetails ingredientData={ingredientData[0]} />
      );
      console.log(ingredientModalContent);
      return ingredientModalContent;
    }
  }

  handleModalContent(); */

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
      <Modal onClose={closeIngredientModal} isOpen={isIngredientModalOpen}>
        <IngredientDetails />
      </Modal>
      <ModalOverlay
        onClick={closeIngredientModal}
        isOpen={isIngredientModalOpen}
      />
    </>
  );
}

export default BurgerConstructor;
