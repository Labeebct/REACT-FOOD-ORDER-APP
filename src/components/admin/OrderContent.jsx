import React from 'react'
import foodImage1 from '../../assets/Foods/food-13619.png'


function OrderContent() {
  return (
<div className='h-full w-full p-4 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#00fff723] flex justify-start px-3 items-center rounded-md py-3 mb-4 sticky top-0 left-0 right-0'>
        <h3 className='font-roboto text-[1.3rem] font-medium'>Orders List</h3>
      </div>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.98rem] font-inter '>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>ORDER _ID</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>USER</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>FOOD NAME</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>FOOD PICTURE</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>PRICE</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>DELIVERY</th>
          <th className='font-bold border border-slate-200 border-opacity-20 py-6'>STATUS</th>
        </tr>
        </thead>
        <tbody>
           <tr className='cursor-pointer'>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Labeeb ct</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>
                <select name="orderstatus" className='text-black outline-none p-2 font-bold text-sm cursor-pointer rounded-sm' id="status">
                    <option className='p-4' value="confirmed">CONFIRMED</option>
                    <option className='p-4' value="packed">PACKED</option>
                    <option className='p-4' value="sent out">SEND OUT</option>
                    <option className='p-4' value="delivered">DELIVERED</option>
                </select>
            </td>
           </tr>
        </tbody>
      </table>
    </div>  )
}

export default OrderContent