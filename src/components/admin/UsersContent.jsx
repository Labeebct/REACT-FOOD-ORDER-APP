import React, { useEffect, useState } from 'react'
import BlockIcon from '@mui/icons-material/Block';
import axiosInstancce from '../../instance/axiosInstance'

function UsersContent() {

  const [userdata , setUserdata] = useState([])

  useEffect(()=>{

    const getDatas = async() =>{
    const response = await axiosInstancce.get('/admin/users')
    const {data , status} = response

    //Saving the signupdata in data state
    if(status == 200) 
    setUserdata(data.signupDatas)
    }

    getDatas()
  
  },[])


  return (
<div className='h-full w-full p-4 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0'>
        <h3 className='font-roboto text-[1.2rem] font-medium'>Users List</h3>
      </div>
      <div className='scrollbar-hide w-full h-auto overflow-x-scroll'>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.92rem] font-inter '>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>USER NAME</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>EMAIL</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>MOBILE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>ORDERS</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>REG DATE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>STATUS</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>BLOCK</th>
        </tr>
        </thead>
        <tbody>
          { userdata.map((data,index) => (
 
           <tr className='cursor-pointer h-[6rem]' key={index}>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 capitalize'>{data.userName}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>{data.email}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>8590471530</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>6</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>
            {new Date(data.regDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </td>
            <td className={`font-[300] border border-slate-200 ${data.status == 'active' ?  'text-green-400'  : 'text-red-600'} border-opacity-20 text-center font-roboto text-[.95rem] py-4 capitalize`}>{data.status}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-red-600'>
              <button className='active:scale-[.9] ease-in-out duration-100'><BlockIcon /></button>
            </td>
           </tr>
 
           ))}
        </tbody>
      </table>
      </div>
    </div>  )
}

export default UsersContent