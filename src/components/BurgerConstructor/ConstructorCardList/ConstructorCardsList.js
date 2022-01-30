import React from "react";
import ConstructorCard from "../ConstructorCard/ConstructorCard";
import constructorStyle from "./constructorCardsList.module.css";

function ConstructorCardList() {
  return (
    <section className="mt-10">
      <h1 className="text text_type_main-medium mb-6">Булки</h1>
      <div className={`${constructorStyle.cardList} mt-6 `}>
        <ConstructorCard />
        <ConstructorCard />
        <ConstructorCard />
      </div>
    </section>
  );
}

export default ConstructorCardList;
