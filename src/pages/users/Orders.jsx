import React, { useEffect, useState } from 'react'
import axionsInstance from '../../instance/axiosInstance'
import OrderContent from '../../components/users/OrderContent'
import loadingVideo from "../../assets/Foods/loading.mp4";

function Orders() {

  //Setting variable state variable for orders
  const [orders , setOrders] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //Fetching order datas
    const fetchOrders = async() => {
      try {

        const response = await axionsInstance.get('/orders')
        const {data , status} = response

        if(status == 200) {
          setOrders(data.orders)
          setLoading(false)        }
      } catch (error) {

        if(error.response) {

          const {status} = error.response
          if(status == 404) {
            setError('No Orders not Found')
          } else {
            console.log('Internal server error');
          }

        } else {
          console.log('No response from the server',error)
        }
      }
    }

    fetchOrders()

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
    <OrderContent orders={orders} />
  )
}

export default Orders