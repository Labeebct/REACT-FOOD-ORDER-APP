import React from "react";
import Quantity from "../../components/users/Quantity";
import viewFood from "../../assets/Foods/food-13619.png";
import DoneIcon from "@mui/icons-material/Done";

function FoodOpenContent() {
  return (
    <main className="w-full h-auto flex items-center justify-center py-8">
      <div className="flex h-auto w-[70%] border border-gray-100 border-opacity-30 rounded-xl flex-wrap">
        <div className="flex items-center justify-center w-1/2 border-r border-gray-100 border-opacity-20  h-[35rem]">
          <img
            src={viewFood}
            className="h-[25rem] w-[27rem]"
            alt="view food image"
          />
        </div>
        <div className="flex flex-col p-10 gap-8  w-1/2  h-[35rem]">
          <h4 className="text-[1.4rem] font-poppins font-[500]">
            Food, grass fed beef foodservice products grass run farms
          </h4>
          <div className="w-ful h-[10%]  font-poppins text-[#E00000] text-[1.7rem]">
            $499
          </div>
          <Quantity />
          <div className="flex items-center gap-2">
            <h4 className="text-[.9rem] font-poppins">CASH ON DELIVERY</h4>
            <DoneIcon className="text-[green]" />
          </div>
          <h4 className="text-[.7rem] font-poiretOne">Delivery Charge $7</h4>
          <h4 className="text-[.9rem] font-inter">Arrive within 4 hours</h4>
          <div className="flex justify-center mt-5 w-full h-[15%]">
            <button className="h-[80%] text-[.85rem] tracking-wide w-[14rem] rounded-[4rem] bg-[#0F130E] text-[#00B929] font-poppins font-[600]">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FoodOpenContent;
