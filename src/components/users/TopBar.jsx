import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

function TopBar() {
  return (
    
    <nav className='flex sticky top-0 right-0 left-0 text-white justify-between px-7 items-center w-full h-[4.5rem] bg-black border-b border-gray-100 border-opacity-10'>
        <div className='text-[1.26rem] sm:text-[1.3rem] md:text-[1.4rem] text-[#FF7A00] font-cagliostro'>LABIOO</div>
        <div className='bg-white flex overflow-hidden rounded-2xl h-7 md:max-w-[14rem] max-w-[9rem] '>
          <input type="text" placeholder='Search' spellCheck={false} className='bg-transparent h-full pl-4 w-[90%] outline-none text-black text-[.9rem]' />
          <div className='w-10 cursor-pointer bg-slate-200 flex items-center justify-center'><SearchIcon style={{color:'black'}} /></div>
        </div>
        <section className='flex md:hidden'><MenuIcon sx={{ fontSize: 27 }} className='cursor-pointer' /></section>
        <ul className='hidden md:flex '>
          <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'>Home</li>
          <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'>Foods</li>
          <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'>Orders</li>
          <li className='px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer'><LogoutIcon sx={{ fontSize: 16 }} /></li>
        </ul>
    </nav>
  )
}

export default TopBar