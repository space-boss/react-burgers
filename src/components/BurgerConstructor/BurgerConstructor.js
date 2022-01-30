import propTypes from "prop-types";
import constructorStyle from "./burgerConstructor.module.css";
import NavBar from "./NavBar/NavBar";
import ConstructorCard from "./ConstructorCard/ConstructorCard";

function BurgerConstructor(props) {
  return (
    <section className={constructorStyle.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <NavBar />
      <div className="mt-10">
        <h2 className="text text_type_main-medium mb-6">Булки</h2>
        <div className={`${constructorStyle.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "bun") {
              return <ConstructorCard data={item} key={item._id} />;
            }
          })}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text text_type_main-medium mb-6">Соусы</h2>
        <div className={`${constructorStyle.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "sauce") {
              return <ConstructorCard data={item} key={item._id} />;
            }
          })}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text text_type_main-medium mb-6">Начинки</h2>
        <div className={`${constructorStyle.cardList} mt-6 `}>
          {props.data.map((item) => {
            if (item.type === "main") {
              return <ConstructorCard data={item} key={item._id} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: propTypes.array,
};

export default BurgerConstructor;
