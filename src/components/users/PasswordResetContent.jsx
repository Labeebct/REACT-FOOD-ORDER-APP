import React from 'react'
import loginLeftImg from "../../assets/Foods/pc1.jpg";

function PasswordResetContent() {
  return (
    <main className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center">
    <section className="w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center">
      <div className="hidden xl:flex w-1/2 h-full ">
        <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
      </div>
      <form className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1">
        <h4 className="text-[1.5rem] md:text-[1.7rem] mt-2 font-playfair">RESET PASSWORD</h4>
        <div className="w-full h-auto flex flex-col mt-9 gap-1">
          <label
            htmlFor="email"
            className="font-roboto pl-2 text-[gray] text-[.8rem]"
          >
            Old Password
          </label>
          <input
            spellCheck={false}
            type="password"
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
          >
            New Password
          </label>
          <input
            spellCheck={false}
            type="password"
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
          >
            Confirm Password
          </label>
          <input
            spellCheck={false}
            type="password"
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
        </div>
        <p className="text-red-500 mt-5 text-center">Incorrect email</p>
        <button className="px-8 py-2 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
          SUBMIT
        </button>
      </form>
    </section>
  </main>  )
}

export default PasswordResetContent