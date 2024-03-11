import React from "react";

function Quantity() {
  return (
    <div className="flex items-center h-auto w-auto">
      <button className="h-6 w-6 cursor-pointer font-bold flex items-center justify-center text-[1.3rem] bg-[#7e7e7eea] text-black">
        -
      </button>
      <p className="border border-slate-200 border-opacity-20 h-6 w-6 flex items-center justify-center text-[1rem]">
        1
      </p>
      <button className="h-6 w-6 cursor-pointer font-bold flex items-center justify-center text-[1.3rem] bg-[#7e7e7eea] text-black">
        +
      </button>
    </div>
  );
}

export default Quantity;
