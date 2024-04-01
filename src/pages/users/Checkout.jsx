import React, { useEffect, useState } from 'react'
import CheckoutContent from '../../components/users/CheckoutContent'
import axiosInstance from '../../instance/axiosInstance'
import { useLocation } from 'react-router-dom'
import loadingVideo from "../../assets/Foods/loading.mp4";

function Checkout() {

  const [loading, setLoading] = useState(true);
  
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
          setLoading(false)        }
        
      } catch (error) {
        if(error.response){

          const { status} = error.response
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
    <CheckoutContent currentQty={quantity} food={food} />
  )
}

export default Checkout