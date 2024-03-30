import React from "react";

function CheckoutPriceArea({food,quantity,message}) {
  return (
    <div className="flex flex-col gap-7 px-2 py-4 w-full h-full">
      <span className="flex items-center justify-between">
        <p className="font-roboto text-[1rem]">Price</p>
        <p className="font-roboto text-[.9rem]">${quantity * food.foodprice}</p>
      </span>
      <span className="flex items-center justify-between">
        <p className="font-roboto text-[1rem]">Delivery</p>
        <p className="font-roboto text-[.9rem]">${food.foodcharge}</p>
      </span>
      <span className="flex items-center justify-between">
        <p className="font-roboto text-[1rem]">Total</p>
        <p className="font-roboto text-[.9rem]">${(quantity * food.foodprice) + food.foodcharge}</p>
      </span>
      <p className="text-center font-poppins text-[.8rem] mt-6 text-red-500">
        {message}
      </p>
      <button className="px-2 py-3 text-[.85rem] tracking-wide active:scale-[.96] ease-out duration-100 rounded-3xl bg-[#0F130E] text-[#00B929] font-poppins font-[600]">
        PROCEED
      </button>
    </div>
  );
}

export default CheckoutPriceArea;
