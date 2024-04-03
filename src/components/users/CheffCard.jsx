import React from "react";
import cheffOne from "../../assets/Foods/ch_1.jpg";
import cheffTwo from "../../assets/Foods/ch_2.jpg";
import cheffThree from "../../assets/Foods/ch_3.jpg";

function CheffCard() {
  return (
    <div className="w-full h-auto mt-24 flex items-center justify-around flex-wrap">
      <div className="h-[34rem] rounded-2xl  w-[25%] min-w-[295px] mt-6 border border-white border-opacity-20 hover:scale-[1.02] ease-linear duration-75">
        <div className="w-full h-[85%] flex items-center justify-center">
          <img src={cheffTwo} className="h-[24rem] w-[18rem]" alt="men cheff" />
        </div>
        <div className="w-full h-[15%] flex justify-center">
          <h4 className="font-poppins text-gray-300 text-opacity-60 text-lg font-light">
            ALTHAF VC
          </h4>
        </div>
      </div>
      <div className="h-[34rem] rounded-2xl w-[25%] min-w-[295px] mt-6 border border-white border-opacity-20 hover:scale-[1.02] ease-linear duration-75">
        <div className="w-full h-[85%] flex items-center justify-center">
          <img src={cheffOne} className="h-[24rem] w-[18rem]" alt="men cheff" />
        </div>
        <div className="w-full h-[15%] flex justify-center">
          <h4 className="font-poppins text-gray-300 text-opacity-60 text-lg font-light">
            RAMEES KKVL
          </h4>
        </div>
      </div>
      <div className="h-[34rem] rounded-2xl  w-[25%] min-w-[295px] mt-6 border border-white border-opacity-20 hover:scale-[1.02] ease-linear duration-75">
        <div className="w-full h-[85%] flex items-center justify-center">
          <img
            src={cheffThree}
            className="h-[24rem] w-[18rem]"
            alt="men cheff"
          />
        </div>
        <div className="w-full h-[15%] flex justify-center">
          <h4 className="font-poppins text-gray-300 text-opacity-60 text-lg font-light">
            JESSICA DARVIS
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CheffCard;
