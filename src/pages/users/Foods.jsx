import React, { useEffect, useState } from 'react'
import FoodsAreaGrid from '../../components/users/FoodsAreaGrid'
import axiosInstance from '../../instance/axiosInstance'
import { useLocation } from 'react-router-dom'
import loadingVideo from "../../assets/Foods/loading.mp4";

function Foods() {

  const [loading, setLoading] = useState(true);

  //Taking out price from query
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const price = queryParams.get('price')

  const [foods,setFoods] = useState([])

  useEffect(() => {

    const fetchFoods = async() => {
      try {
    
        //Sending api to collect foods to show in home page
        const response = await axiosInstance.get(`/foods?price=${price}`)
        const {data , status} = response

        if(status == 200){
          setFoods(data.foods)
          setLoading(false)
        }
      } catch (error) {
        console.log('Error in fetch foods',error);
      }
    }
    
    fetchFoods()
    
    
  })

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-4.5rem)]  inset-0 flex z-30 justify-center items-center">
        <video
          src={loadingVideo}
          autoPlay
          loop
          muted
          className="w-[15rem] h-[15rem] mb-28"
        ></video>
      </div>
    );
  }

  return (
    <FoodsAreaGrid foods={foods} />
  )
}

export default Foods