import React from "react";
import burger from "../../assets/Foods/berger 2.jpg";

function HomeBurger() {
  return (
    <div className="w-full my-24 h-auto justify-around flex-wrap flex">
      <div className="w-1/2 h-[40rem] flex items-center min-w-[400px] flex-col flex-1">
        <p className="font-poppins text-[6rem] mt-20 font-bold text-[#FF7A00] text-center drop-shadow-sm">
          BUY ONE
        </p>
        <p className="font-roboto text-[3rem] mt-10 font-bold text-center">
          BURGER
        </p>
        <h2 className="text-[1.6rem] font-inter mt-16 text-[#b9db30] text-center">
          GET A PEPSI FREE
        </h2>
      </div>
      <div className="w-1/2 h-[40rem] flex items-center justify-center min-w-[400px] flex-1">
        <img src={burger} className="h-[37rem] w-[37rem] hover:scale-[1.04] ease-linear duration-75" alt="burger image" />
      </div>
    </div>
  );
}

export default HomeBurger;
