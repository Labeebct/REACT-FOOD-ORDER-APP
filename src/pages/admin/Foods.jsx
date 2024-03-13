import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import foodImage1 from '../../assets/Foods/food-13619.png'

function Foods() {
  return (
    <div className='h-full w-full p-3 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#00fff723] flex justify-between px-3 items-center rounded-md py-3 mb-4 '>
        <h3 className='font-roboto text-[1.3rem] font-medium'>Foods List</h3>
      <button className='p-2 py-2 text-white bg-[#d51d1d] font-inter text-[.8rem] flex items-center gap-1 font-bold rounded-md'>ADD FOOD <AddIcon/></button>
      </div>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.98rem] font-inter '>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>FOOD _ID</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>FOOD PICTURE</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>FOOD NAME</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>PRICE</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>DELIVERY</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>CHARGE</th>
        </tr>
        </thead>
        <tbody>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
           <tr>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
           </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Foods