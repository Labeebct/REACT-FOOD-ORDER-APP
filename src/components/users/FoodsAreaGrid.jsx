import React from "react";
import FoodFrame from "./FoodFrame";

function FoodsAreaGrid({foods}) {

  return (
    <section className="w-full place-items-center h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4">
    <FoodFrame foods={foods} />
    </section>
  );
}

export default FoodsAreaGrid;
