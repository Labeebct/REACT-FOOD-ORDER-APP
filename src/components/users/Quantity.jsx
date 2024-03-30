import React, { useState } from "react";

function Quantity({quantity,setQuantity}) {

  const handleIncrease = (e) =>{
     e.stopPropagation();
     if(quantity < 20) setQuantity(parseInt(quantity)+1)
  }

  const handleDecrease = (e) => {
    e.stopPropagation();
    if(quantity > 1) setQuantity(parseInt(quantity)-1) 
  }

  return (
    <div className="flex items-center h-auto w-auto">
      <button onClick={handleDecrease} className="h-6 w-6 cursor-pointer font-bold flex items-center justify-center text-[1.3rem] bg-[#7e7e7eea] text-black">
        -
      </button>
      <p className="border border-slate-200 border-opacity-20 h-6 w-6 flex items-center justify-center text-[1rem]">
        {quantity}
      </p>
      <button onClick={handleIncrease} className="h-6 w-6 cursor-pointer font-bold flex items-center justify-center text-[1.3rem] bg-[#7e7e7eea] text-black">
        +
      </button>
    </div>
  );
}

export default Quantity;
