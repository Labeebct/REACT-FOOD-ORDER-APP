import React from 'react'

function AdminLoginContent() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
     <section className="w-[33%] mb-2 xl:w-[29%] min-w-[320px] sm:min-w-[370px] h-[34rem] bg-[#fdfdfd14]  overflow-hidden rounded-[.6rem] flex justify-center">
        <form className="w-full text-black h-full flex  flex-col items-center px-[2.6rem] py-9 gap-4 flex-1">
          <h4 className="text-[2.2rem] mt-2 font-playfair text-white">Login</h4>
          <div className="w-full h-auto flex flex-col mt-9 gap-2">
            <label
              htmlFor="email"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Email
            </label>
            <input
              spellCheck={false}
              type="text"
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
            <label
              htmlFor="email"
              className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
            >
              Password
            </label>
            <input
              spellCheck={false}
              type="password"
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
          </div>
          <p className="text-red-500 text-center mt-6">Incorrect email</p>
          <button className="px-8 py-2 mt-4 hover:bg-[#FF5A00] active:scale-[.96] ease-out duration-100 font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            LOGIN
          </button>
        </form>
      </section>
    </div>
  )
}

export default AdminLoginContent