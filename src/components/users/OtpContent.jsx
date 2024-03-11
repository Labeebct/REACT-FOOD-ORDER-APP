import React from "react";
import loginLeftImg from "../../assets/Foods/pc1.jpg";

function OtpContent() {
  return (
    <main className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center">
        <div className="hidden xl:flex w-1/2 h-full ">
          <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
        </div>
        <form className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1">
          <h4 className="text-[2.2rem] mt-2 font-playfair">OTP</h4>
          <h3 className="text-center font-poppins text-[.9em] mt-10">
            Enter the Four Digit OTP send to the email
          </h3>
          <div className="w-full h-auto flex justify-center mt-9 gap-3">
            <input
              className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield] 
              [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
            />
            <input
              className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield]
               [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
            />
            <input
              className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield]
               [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
            />
            <input
              className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield]
               [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
            />
          </div>
          <p className="text-red-500 text-center mt-5">Incorrect email</p>
          <button className="px-8 py-3 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
}

export default OtpContent;
