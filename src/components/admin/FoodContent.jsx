import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import foodImage1 from '../../assets/Foods/food-13619.png'
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';


function AdminFoodContent() {   
  return (
    <div className='h-full w-full p-4 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-3 mb-4 sticky top-0 left-0 right-0'>
        <h3 className='font-roboto text-[1.2rem] font-medium'>Foods List</h3>
      <button onClick={()=>window.location.href = '/admin/add-food' } className='p-2 py-2 text-white bg-orange-600 font-inter text-[.75rem] flex items-center gap-1 drop-shadow-2xl font-bold rounded-sm active:scale-[.98] ease-in-out duration-200'>ADD FOOD <AddIcon sx={{ fontSize: 20 }}/></button>
      </div>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.92rem] font-inter '>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>FOOD _ID</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>FOOD PICTURE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>FOOD NAME</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>PRICE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>DELIVERY</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>CHARGE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>EDIT</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>BLOCK</th>
        </tr>
        </thead>
        <tbody>
           <tr className='cursor-pointer'>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={foodImage1} className='mx-auto w-23 h-20' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Food grass roasted beaf</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$8282</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>4 hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>$5</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>
              <button className='active:scale-[.9] ease-in-out duration-100'><EditIcon /></button>
              </td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-red-600'>
              <button className='active:scale-[.9] ease-in-out duration-100'><BlockIcon /></button>
              </td>
           </tr>
        </tbody>
      </table>
    </div>
    )
}

export default AdminFoodContent