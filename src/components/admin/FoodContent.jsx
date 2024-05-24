import React, { useEffect, useState } from 'react'
import axiodInstance from '../../instance/axiosInstance'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import AddIcon from '@mui/icons-material/Add';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import loadingVideo from "../../assets/Foods/loading.mp4";
import { useNavigate } from 'react-router-dom';


function AdminFoodContent() {   

  const Navigate = useNavigate()

  const [data , setData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true)
    const fetchFoods = async() => {
      try {
        const response = await axiodInstance.get('/admin/all-foods')
        const {data , status} = response

        if(status == 200) {
          setData(data.foods)
          setLoading(false)
        }
      } catch (error) {
        if(error.response){
          console.log('Error in fetch foods',error);
        } else {
          console.log('No response from the server');
        }
      }
    }

    fetchFoods()

  },[])

  const blockUser = async(foodId) => {
    try {

      const findFood = data.find((food) => food._id == foodId)
      const setStatus = findFood.blocked? 'UNBLOCK' : 'BLOCK'

      //Code for sweat alert
      Swal.fire({
        title: "Are you sure?",
        text: `You want to ${setStatus}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        reverseButtons: true,
        confirmButtonText: `Yes,${setStatus} it!`
      }).then(async(result) => {
        if (result.isConfirmed) {
      
      const response = await axiodInstance.patch(`/admin/block-food?foodId=${foodId}`)
      const {data,status} = response

      if(status == 200){
        setData((prevStatus) => 
          prevStatus.map((food) =>
            food._id == foodId ? {...food,blocked:data.newStatus} : food
          )
        )
        Swal.fire({
          title: `${data.newStatus ? 'BLOCKED' : 'UNBLOCKED'}`,
          text: `Food has been ${data.newStatus? 'BLOCKED' : 'UNBLOCKED'}.`,
          icon: "success"
        });
      }
     }
     });
    } catch (error) {
      if(error.response){
       const {data , status} = error.response
       if(status == 404){
        console.log('Error in block user',error,data.msg);
       }
      }
    }

  }

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-4.5rem)]  inset-0 flex z-30 justify-center items-center">
        <video
          src={loadingVideo}
          autoPlay
          loop
          muted
          className="w-[15rem] h-[15rem]"
        ></video>
      </div>
    );
  }

  return (
    <div className='h-full w-full p-4 flex flex-col items-center overflow-y-scroll'>
      <div className='w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-3 mb-4 sticky top-0 left-0 right-0'>
        <h3 className='font-roboto text-[1.2rem] font-medium'>Foods List</h3>
      <button onClick={()=> Navigate('/admin/add-food') } className='p-2 py-2 text-white bg-orange-600 font-inter text-[.75rem] flex items-center gap-1 drop-shadow-2xl font-bold rounded-sm active:scale-[.98] ease-in-out duration-200'>ADD FOOD <AddIcon sx={{ fontSize: 20 }}/></button>
      </div>
      <div className='scrollbar-hide w-full h-auto overflow-x-scroll'>
      <table className='border border-slate-200 border-opacity-20 w-full h-auto'>
        <thead>
        <tr className='text-[.92rem] font-inter '>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>FOOD _ID</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>FOOD PICTURE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32'>FOOD NAME</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-24'>PRICE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-28'>DELIVERY</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-[5rem]'>CHARGE</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-20'>EDIT</th>
          <th className='font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-20'>BLOCK</th>
        </tr>
        </thead>
        <tbody>

        { data.map((foods)=> (

           <tr className='cursor-pointer' key={foods._id}>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 '>{foods._id}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'><img src={'https://foodapi.labio.shop/'+ foods.foodImg} className='mx-auto w-24 h-17' alt="" /></td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>{foods.foodname}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>${foods.foodprice}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>{foods.fooddelivery} hours</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4'>${foods.foodcharge}</td>
            <td className='font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500'>
              <button onClick={() => Navigate(`/admin/edit-food/${foods._id}`)} className='active:scale-[.9] ease-in-out duration-100'><EditIcon /></button>
            </td>
            <td className={`font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 ${foods.blocked ? 'text-green-600' : 'text-red-600' }`}>
              <button onClick={()=>blockUser(foods._id)} className='active:scale-[.9] ease-in-out duration-100'>
               { foods.blocked ? <PanoramaFishEyeIcon /> : <BlockIcon /> }
              </button>
            </td>
           </tr>

            ))}
        </tbody>
      </table>
      </div>
    </div>
    )
}

export default AdminFoodContent