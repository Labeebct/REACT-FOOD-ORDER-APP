import React, { useEffect, useState } from 'react'
import FoodsAreaGrid from '../../components/users/FoodsAreaGrid'
import axiosInstance from '../../instance/axiosInstance'
import { useLocation } from 'react-router-dom'

function Foods() {

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
        }
      } catch (error) {
        console.log('Error in fetch foods',error);
      }
    }
    
    fetchFoods()
    
    
  })

  return (
    <FoodsAreaGrid foods={foods} />
  )
}

export default Foods