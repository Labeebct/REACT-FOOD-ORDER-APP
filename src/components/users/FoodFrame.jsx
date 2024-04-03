import React from "react";
import { useNavigate } from "react-router-dom";

function FoodFrame({foods}) {

  const Navigate = useNavigate()

  const handleCheckout = (e,foodId) => {
    e.stopPropagation()  
    Navigate(`/checkout?food=${foodId}&quantity=${1}`)
 }

  return (
    <>
    { foods.map((food,index) => 
    <div key={index} onClick={() => Navigate(`/view-food/${food._id}`) } className="flex mt-5 cursor-pointer flex-col h-[28rem] min-w-[250px] border border-white border-opacity-20 flex-1 max-w-[300px]">
      <div className="flex items-center justify-center w-full h-[55%] border-b border-slate-50 border-opacity-20">
        <img src={'https://labio.shop/' + food.foodImg} className="h-44 w-44" alt="food for order" />
      </div>
      <div className="w-full h-[20%] flex justify-center items-center text-center font-[100] text-gray-100 text-opacity-90 font-poiretOne text-[.9rem] px-2">
       {food.foodname}
      </div>
      <div className="w-ful h-[10%] flex justify-center font-poppins text-[#E00000] text-[1.2rem]">
        ${food.foodprice}
      </div>
      <div className="flex justify-center w-full h-[15%]">
        <button onClick={(e) => handleCheckout(e,food._id)}  className="h-[75%] duration-75 ease-linear active:scale-[.95] text-[.82rem] tracking-wider w-[10rem] rounded-3xl bg-[#0F130E] text-[#00B929] font-poppins font-[600]">
          ORDER NOW
        </button>
      </div>
    </div>
    )}
    </>
  );
}

export default FoodFrame;
