import React from "react";
import FoodFrame from "./FoodFrame";

function FoodsArea({foods}) {

  return (
    <section className="w-full h-auto flex items-center gap-3 justify-around px-4 flex-wrap">
      <FoodFrame foods={foods} />
    </section>
  );
}

export default FoodsArea;
