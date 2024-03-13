import React from "react";
import foodImg from '../../assets/Foods/food-13559.png'

function AddFoodContent() {
  return (
    <div className="h-full w-full p-4 flex flex-col items-center overflow-y-scroll">
      <div className="w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0">
        <h3 className="font-roboto text-[1.2rem] font-medium">Add Food</h3>
      </div>
      <div className="flex  items-center justify-center w-full h-[40rem] ">
           <form className="flex flex-col px-16 p-5 items-center w-[50%] h-[100%] min-w-[400px] border border-slate-200 border-opacity-20">
              <div className="flex overflow-hidden rounded-lg items-center justify-center w-[9.5rem] h-[10.5rem] border border-slate-200 border-opacity-20 ">
                 <img src={foodImg} className="h-28 w-29" alt="" />
              </div>
              <div className="relative w-auto flex items-center overflow-hidden">
                <div className="my-4 p-2 px-6 bg-orange-600 font-poppins font-medium text-[.8rem] rounded-[1rem]">CHOOSE FILE</div>
                <input className="absolute opacity-0" type="file" />
              </div>
              <div className="w-[90%] mt-1 h-auto flex flex-col gap-5">
                <input type="text" spellCheck={false} placeholder="Name" className="w-full h-[2.6rem] bg-[#5856567b] rounded-sm outline-none px-4" />
                <input type="text" spellCheck={false} placeholder="Price" className="w-full h-[2.6rem] bg-[#5856567b] rounded-sm outline-none px-4" />
                <input type="text" spellCheck={false} placeholder="Charge" className="w-full h-[2.6rem] bg-[#5856567b] rounded-sm outline-none px-4" />
                <input type="text" spellCheck={false} placeholder="Delivery Within" className="w-full h-[2.6rem] bg-[#5856567b] rounded-sm outline-none px-4" />
                <div className="flex w-full h-auto"><button className="m-auto bg-[#ffffff] text-black px-8 rounded-md cursor-pointer active:scale-[.95] duration-100 ease-in-out font-inter font-medium py-2">SUBMIT</button></div>
              </div>
           </form>
      </div>
    </div>
  );
}

export default AddFoodContent;
