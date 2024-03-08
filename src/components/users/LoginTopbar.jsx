import React from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function LoginTopbar() {
  return (
    <nav className='flex z-10 sticky top-0 right-0 left-0 text-white justify-between px-7 items-center w-full h-[4.5rem] bg-black border-b border-gray-100 border-opacity-10'>
    <div className='text-[1.26rem] sm:text-[1.3rem] md:text-[1.4rem] text-[#FF7A00] font-cagliostro'>LABIOO</div>
    <section className='flex md:hidden'><MenuIcon sx={{ fontSize: 27 }} className='cursor-pointer' /></section>
    <ul className='hidden md:flex'>
      <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'><Link to='/home'>Home</Link></li>
      <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'><Link to='/foods'>Foods</Link></li>
      <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'><Link to='/orders'>Orders</Link></li>
    </ul>
</nav>
  )
}

export default LoginTopbar