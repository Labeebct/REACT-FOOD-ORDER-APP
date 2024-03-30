import React, { useEffect, useState } from 'react'
import axionsInstance from '../../instance/axiosInstance'
import OrderContent from '../../components/users/OrderContent'

function Orders() {

  //Setting variable state variable for orders
  const [orders , setOrders] = useState([])
  const [error , setError] = useState(null)

  useEffect(() => {

    //Fetching order datas
    const fetchOrders = async() => {
      try {

        const response = await axionsInstance.get('/orders')
        const {data , status} = response

        if(status == 200) {
          setOrders(data.orders)
        }
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

  return (
    <OrderContent orders={orders} />
  )
}

export default Orders