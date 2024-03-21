import React, { useEffect, useState } from 'react'
import FoodsArea from '../../components/users/FoodsArea'
import axiosInstance from '../../instance/axiosInstance'

function Foods() {

  const [foods,setFoods] = useState([])

  useEffect(() => {

    const fetchFoods = async() => {
      try {
    
        //Sending api to collect foods to show in home page
        const response = await axiosInstance.get('/foods')
        const {data , status} = response

        if(status == 200){
          setFoods(data.foods)
        }
      } catch (error) {
        console.log('Error in fetch foods',error);
      }
    }
    
    fetchFoods()
    
    
  },[])

  return (
    <FoodsArea foods={foods} />
  )
}

export default Foods