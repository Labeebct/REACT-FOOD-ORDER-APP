import React from 'react'
import { Link } from 'react-router-dom'
import loginLeftImg from '../../assets/Foods/pc8.jpg'

function SignupContent() {
  return (
    <main className='w-full h-[calc(100vh-4.5rem)] flex items-center justify-center'>
    <section className='w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center'>
       <div className="hidden xl:flex w-1/2 h-full ">
           <img src={loginLeftImg} alt="foodimage" className='h-full w-full' />
       </div>
              <form className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1">
                 <h4 className='text-[2.2rem] mt-1 font-playfair'>Signup</h4>
                 <div className='w-full h-auto flex flex-col mt-3 gap-1'>
                   <label htmlFor="email" className='font-roboto pl-2 text-[gray] text-[.8rem]'>Username</label>
                   <input spellCheck={false} type="text" className='h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm' />
                   <label htmlFor="email" className='font-roboto mt-1 pl-2 text-[gray] text-[.8rem]'>Email</label>
                   <input spellCheck={false} type="text" className='h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm' />
                   <label htmlFor="email" className='font-roboto mt-1 pl-2 text-[gray] text-[.8rem]'>Password</label>
                   <input spellCheck={false} type="password" className='h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm' />
                   <label htmlFor="email" className='font-roboto mt-1 pl-2 text-[gray] text-[.8rem]'>Confirm Password</label>
                   <input spellCheck={false} type="password" className='h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm' />
                 </div>
                 <p className='text-[.8rem] text-[gray] font-poppins mt-3'>Already Have an account ? <Link to='/Login' className='text-blue-800'>Login</Link></p>
                 <button className='px-8 py-2 mt-3 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer'>SIGNUP</button>
              </form>
    </section>
  </main>
 )
}

export default SignupContent