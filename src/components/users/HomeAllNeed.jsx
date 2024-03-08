import React from "react";
import CartoonCheff from "../../assets/Foods/cartoon cheff.png";

function HomeAllNeed() {
  return (
    <div className="w-full h-auto my-32 flex justify-around flex-wrap border-1">
      <div className="w-[50%] min-w-[430px] h-[30rem] flex items-center justify-center lg:border-r border-white border-opacity-20">
        <img
          src={CartoonCheff}
          className="w-[27rem] h-[27rem]"
          alt="cartoon image of cheff holding pizza"
        />
      </div>
      <div className="w-[50%] h-[30rem] flex flex-col justify-around items-center">
        <h3 className="text-[2.1rem] lg:text-[2.8rem] text-[#FF7A00] font-poppins font-[600] text-center">
          ALL YOU NEED IS HERE
        </h3>
        <h4 className="font-playfair text-[3.4rem] mb-24">@99</h4>
        <button className="px-12 py-3 text-[1rem] tracking-wide rounded-3xl bg-[#E00000] text-white font-poppins font-[600]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default HomeAllNeed;
