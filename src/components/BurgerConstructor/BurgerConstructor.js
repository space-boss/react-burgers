import constructorStyle from "./burgerConstructor.module.css";
import NavBar from "./NavBar/NavBar";
import ConstructorCardList from "./ConstructorCardList/ConstructorCardsList";

function BurgerConstructor() {
  return (
    <section className={constructorStyle.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <NavBar />
      <ConstructorCardList />
    </section>
  );
}

export default BurgerConstructor;
