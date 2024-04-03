import React, { useState } from "react";
import foodImage from "../../assets/Foods/main-food.png";
import Quantity from "../../components/users/Quantity";
import { useNavigate } from "react-router-dom";

function Checkoutframe({food,quantity,setQuantity}) {

  const Navigate = useNavigate()

  return (
    <div onClick={() => Navigate('/view-food/'+ food._id)} className="w-full h-[12rem] cursor-pointer  flex border border-slate-200 border-opacity-20">
      <div className="h-full w-[11rem] border-r border-slate-200 border-opacity-20 flex items-center justify-center">
        <img
          src={'https://food.labio.shop/' + food.foodImg}
          className="h-24 w-24 md:w-28 md:h-28"
          alt="food image"
        />
      </div>
      <div className="flex flex-wrap flex-col justify-evenly h-full w-[calc(100%-11rem-10rem)] px-10">
        <h4 className="text-[.8rem] md:text-[1.1rem] font-poppins font-[500]">
          {food.foodname}
        </h4>
        <div className="w-ful h-[10%] font-poppins text-[#E00000] text-[1.2rem] md:text-[1.4rem]">
        ${quantity * food.foodprice}
        </div>
        <h4 className="text-[.6rem] md:text-[.75rem] mt-5 font-poiretOne">
          Delivery Charge ${food.foodcharge}
        </h4>
      </div>
      <div className="flex items-center justify-center pb-8 font-bold font-inter text-[.6rem] md:text-[.8rem] h-full text-[#e4e4e4] w-[10rem]">
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default Checkoutframe;
