import React from "react";
import mainFoodImage from "../../assets/Foods/main-food.png";
import { useNavigate } from "react-router-dom";

function HomeEntry() {

  //For navigation
  const Navigate = useNavigate()

  return (
    <div className="flex w-full h-[calc(100vh-4.5rem)] flex-wrap">
      <div className="flex items-center justify-center w-[50%] min-w-[439px] h-full flex-1">
        <img
          src={mainFoodImage}
          className="h-[21em] w-[34em] md:h-[28em] md:w-[44rem]"
          alt="mainfood image"
        />
      </div>
      <div className="hidden lg:flex relative flex-col items-center gap-5 w-[50%] h-full">
        <h4 className="font-poppins font-[300] absolute top-[7rem] left-1 text-[1.55em] -z-10 text-white opacity-75">
          Explore our innovations
        </h4>
        <h2 className="font-poppins font-[1000] absolute top-[12rem] text-[3.7rem] -z-10 text-[#E00000] drop-shadow-md">
          ENJOY THE TASTE
        </h2>
        <button onClick={() => setTimeout(() =>  Navigate('/foods') , 200) } className="absolute px-10 py-3 duration-75 ease-linear active:scale-[.95] hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
          EXPLORE
        </button>
        <p className="absolute top-[31rem] font-poiretOne text-[.8rem] text-gray-50 font-[100] -z-10 opacity-50">
          Sponsored by Labio The Innovating Futures.
        </p>
      </div>
    </div>
  );
}

export default HomeEntry;
