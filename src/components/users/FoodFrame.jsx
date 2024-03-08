import React from "react";
import foodOne from "../../assets/Foods/food-13549.png";

function FoodFrame() {
  return (
    <div className="flex mt-5 cursor-pointer flex-col h-[28rem] min-w-[220px] border border-white border-opacity-20 flex-1 max-w-[300px]">
      <div className="flex items-center justify-center w-full h-[55%] border-b border-slate-50 border-opacity-20">
        <img src={foodOne} className="h-44 w-44" alt="food for order" />
      </div>
      <div className="w-full h-[20%] flex justify-center items-center text-center font-[100] text-gray-100 text-opacity-90 font-poiretOne text-[.9rem] px-2">
        Food, grass fed beef foodservice products grass run farms
      </div>
      <div className="w-ful h-[10%] flex justify-center font-poppins text-[#E00000] text-[1.2rem]">
        $499
      </div>
      <div className="flex justify-center w-full h-[15%]">
        <button className="h-[75%] text-[.85rem] tracking-wide w-[10rem] rounded-3xl bg-[#0F130E] text-[#00B929] font-poppins font-[600]">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default FoodFrame;
