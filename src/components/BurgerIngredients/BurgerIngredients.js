import React from "react";
import PropTypes from "prop-types";
import { dataPropType } from "../../utils/proptypes";
import styles from "./burgerIngredients.module.css";
import NavBar from "./NavBar/NavBar";
import IngredientCard from "./IngredientCard/IngredientCard";
import { IngredientDetails } from "../modal/IngredientDetails/IngredientDetails";
import Modal from "../modal/modal";
import ModalOverlay from "../modal/modalOverlay/modalOverlay";
import { DataContext } from "../../services/appContext";

function BurgerIngredients(props) {
  const bunsRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainsRef = React.useRef(null);

  const [isIngredientModalOpen, setIngredientModalOpen] = React.useState(false);
  const [ingredientModalContent, setIngredientModalContent] = React.useState(
    <></>
  );
  const [itemId, setItemId] = React.useState("");
  const { data } = React.useContext(DataContext);

  const openIngredientModal = (evt) => {
    const ingredientData = data.filter(
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
      <section className={styles.section}>
        <h1 className="text text_type_main-large pt-10 pb-5">
          Соберите бургер
        </h1>
        <NavBar bunsRef={bunsRef} sauceRef={sauceRef} mainsRef={mainsRef} />
        <div className={styles.ingredients}>
          <div className="mt-10" ref={bunsRef}>
            <h2 className="text text_type_main-medium mb-6">Булки</h2>
            <div className={`${styles.cardList} mt-6 `}>
              {data.map((item) => {
                if (item.type === "bun") {
                  return (
                    <IngredientCard
                      onClick={openIngredientModal}
                      data={item}
                      key={item._id}
                      id={item._id}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="mt-10" ref={sauceRef}>
            <h2 className="text text_type_main-medium mb-6">Соусы</h2>
            <div className={`${styles.cardList} mt-6 `}>
              {data.map((item) => {
                if (item.type === "sauce") {
                  return (
                    <IngredientCard
                      onClick={openIngredientModal}
                      data={item}
                      key={item._id}
                      id={item._id}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="mt-10" ref={mainsRef}>
            <h2 className="text text_type_main-medium mb-6">Начинки</h2>
            <div className={`${styles.cardList} mt-6 `}>
              {data.map((item) => {
                if (item.type === "main") {
                  return (
                    <IngredientCard
                      onClick={openIngredientModal}
                      data={item}
                      key={item._id}
                      id={item._id}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
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
/*
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropType).isRequired,
}; */

export default BurgerIngredients;
