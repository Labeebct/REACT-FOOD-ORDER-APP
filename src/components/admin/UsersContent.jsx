import React from 'react'
import BlockIcon from '@mui/icons-material/Block';

function UsersContent() {
  return (
<div className='h-full w-full p-4 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-3 mb-4 sticky top-0 left-0 right-0'>
        <h3 className='font-roboto text-[1.3rem] font-medium'>Users List</h3>
      </div>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.92rem] font-inter '>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>USERS _ID</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>USER NAME</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>EMAIL</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>ORDERS</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>REG DATE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>STATUS</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6'>BLOCK</th>
        </tr>
        </thead>
        <tbody>
           <tr className='cursor-pointer'>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>7564856846883</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>labeeb ct</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>ctlabeebthaliyil@gmail.com</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>6</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>12-04-2024</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>Active</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-red-600'>
              <button className='active:scale-[.9] ease-in-out duration-100'><BlockIcon /></button>
              </td>
           </tr>
        </tbody>
      </table>
    </div>  )
}

export default UsersContent