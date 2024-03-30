import React from "react";
import foodImage from "../../assets/Foods/main-food.png";

function OrderFrame({orders}) {
  return (

    <>
    { orders.map((order) => (

    <div key={orders._id} className="w-full h-[12rem] flex border border-slate-200 border-opacity-20">
      <div className="h-full w-[11rem] border-r border-slate-200 border-opacity-20 flex items-center justify-center">
        <img
          src={foodImage}
          className="h-32 w-44 md:w-48 md:h-32 "
          alt="food image"
        />
      </div>
      <div className="flex flex-wrap flex-col justify-evenly h-full w-[calc(100%-11rem-8rem-7rem)] px-5">
        <h4 className="text-[.8rem] md:text-[1.1rem] font-poppins font-[500]">
         {order.foodname}
        </h4>
        <div className="w-ful h-[10%] font-poppins text-[#E00000] text-[1.2rem] md:text-[1.4rem]">
          ${order.price}
        </div>
        <h4 className="text-[.6rem] md:text-[.75rem] mt-5 font-poiretOne">
          Delivery Charge ${order.fooddelivery}
        </h4>
      </div>
      <div className="flex items-center justify-center pb-8 font-bold font-inter text-[.6rem] md:text-[.8rem] h-full text-[#e4e4e4] w-[7rem]">
      {order.foodorderdate}
      </div>
      <div className="h-full w-[8rem]  flex items-center justify-center">
        <h3 className="text-green-600 text-[.6rem] md:text-[.9rem] font-poppins font-bold pb-8 tracking-wider">
        {order.status}
        </h3>
      </div>
    </div>

  ))}
  </>
  );
}

export default OrderFrame;
