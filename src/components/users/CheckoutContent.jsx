import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import check from '../../assets/Foods/check.png'

import Checkoutframe from "../../components/users/Checkoutframe";
import CheckoutAddressArea from "../../components/users/CheckoutAddressArea";
import CheckoutPriceArea from "../../components/users/CheckoutPriceArea";
import axiosInstance from '../../instance/axiosInstance'

function CheckoutContent({food,currentQty}) {
  
  const Navigate = useNavigate()
  
  let [quantity , setQuantity] = useState(currentQty)
  const [succes , setSuccess] = useState(false)
  const [message , setMessage] = useState('')

  
  const handleSubmit = async(e) => {

      e.preventDefault()

      //Destrucuring input elements
      const {firstname,lastname,email,mobilenum,state,district,pin,city,landmark,houseno} = e.target

      //Validaating address whether all field contains
      if(!firstname.value) setMessage('Please Enter First Name')
      else if (!lastname.value) setMessage('Please Enter Last Name')
      else if (!email.value) setMessage('Please Enter Email Address')
      else if (!mobilenum.value) setMessage('Please Enter Mobilenum Number')
      else if (!state.value) setMessage('Please Enter State')
      else if (!district.value) setMessage('Please Enter District')
      else if (!pin.value) setMessage('Please Enter Pin Number')
      else if (!city.value) setMessage('Please Enter City')
      else if (!landmark.value) setMessage('Please Enter Landmark')
      else if (!houseno.value) setMessage('Please Enter House Number')
      else {
      
      //Creating a address obj
      const address = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            mobilenum:mobilenum.value,
            state:state.value,
            district:district.value,
            pin:pin.value,
            city:city.value,
            landmark:landmark.value,
            houseno:houseno.value
      }

      confirmAlert({
      title: "Confirm to ORDER",
      message: "Are you sure you want to order?",
      titleClassName: 'text-xl font-bold text-green-500',
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: '#D80032' }, 
          className: 'text-white font-bold py-2 px-4 rounded mr-2',
          onClick: async() =>{
            try {

            //Sending api to create order
            const response = await axiosInstance.post(`/checkout?foodId=${food._id}&quantity=${quantity}`,{address})
            const {data,status} = response
            
              if(status == 200){
                setTimeout(() => setSuccess(true), 400);
                setTimeout(() => Navigate('/'), 2000);
                }
        
            } catch (error) {
              if(error.response){
        
                const {data , status} = error.response
                
                if(status == 422) {
                  setMessage(data.msg) 
                } else if (status == 404) {
                  setMessage(data.msg)
                }
        
              } else {
                console.log('No response from server',error);
              }
            }
          },
        },
        {
          label: "No",
          style: { backgroundColor: '#65B741' }, 
          className: 'bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2',
        }
      ],
      overlayClassName: 'fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center',
    });
    

  }
}

  if(message) setTimeout(() => setMessage(''), 2000);

  return (
    <main className="w-full h-[calc(100vh-4.5rem)] p-4 overflow-y-auto">
      <Checkoutframe quantity={quantity} setQuantity={setQuantity} food={food} />
      <form onSubmit={handleSubmit} className="w-full flex h-[calc(100%-12rem_)] border flex-wrap border-slate-200 border-opacity-20">
        <div className="h-full   border-r p-2  flex-grow border-slate-200 border-opacity-20">
          <CheckoutAddressArea setMessage={setMessage} />
        </div>
        <div className="w-[16rem] p-10 flex-grow justify-center items-center">
          <CheckoutPriceArea message={message} quantity={quantity} food={food} />
          <div className={`absolute inset-0 ${succes ? 'flex' : 'hidden' } justify-center items-center`}>
            <div className="w-1/3 flex-col h-[18rem] gap-5 rounded-[1rem] bg-[#ffffff] flex justify-center items-center">
              <img src={check} className="w-40 h-40" />
              <h2 className="text-green-900 font-poppins font-bold text-[1.4rem] text-center">ORDER SUCCESS</h2>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default CheckoutContent;
