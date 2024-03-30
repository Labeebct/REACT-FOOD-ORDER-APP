import React, { useEffect, useState } from 'react'
import CheckoutContent from '../../components/users/CheckoutContent'
import axiosInstance from '../../instance/axiosInstance'
import { useLocation } from 'react-router-dom'

function Checkout() {
  
  //Taking foodid and quantity to send api to find product
  const location = useLocation()
  const  queryParams = new URLSearchParams(location.search)
  const foodId = queryParams.get('food')
  const quantity = queryParams.get('quantity')

  const [food , setFood] = useState('')

  useEffect(() => {

    const handleCheckout = async() => {
      try {

        const response = await axiosInstance.get(`/checkout?foodId=${foodId}&quantity=${quantity}`)
        const {data , status} = response

        if(status == 200){
          setFood(data.food)
        }
        
      } catch (error) {
        if(error.response){

          const {data , status} = error.response
          if(status == 404){
            console.log('food not found',error);
          }
          
        } else {
          console.log('No response from server',error);
        }
      }
    }

    handleCheckout()

  },[])

  return (
    <CheckoutContent currentQty={quantity} food={food} />
  )
}

export default Checkout