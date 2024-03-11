import React from "react";
import FoodFrame from "./FoodFrame";

function FoodsArea() {
  return (
    <section className="w-full h-auto flex items-center gap-3 justify-around px-4 flex-wrap">
      <FoodFrame />
      <FoodFrame />
      <FoodFrame />
      <FoodFrame />
      <FoodFrame />
    </section>
  );
}

export default FoodsArea;
