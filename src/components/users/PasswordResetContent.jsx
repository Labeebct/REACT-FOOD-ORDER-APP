import React, { useEffect, useState } from 'react'
import loginLeftImg from "../../assets/Foods/pc1.jpg";
import axiosInstance from '../../instance/axiosInstance'
import { useLocation, useNavigate } from 'react-router-dom';

function PasswordResetContent() {
  
  const Navigate = useNavigate()

  //Getting email from query
  const location = useLocation()
  const [email , setEmail ] = useState('')
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    setEmail(queryParams.get('email'))
  },[location.search])

  //Password regex to set secure password
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //Error messages to show to users
  const [message , setMessage] = useState('')

  //Submitting form
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      //Destructuring datas from event
      const {oldPassword , newPassword , confirmPassword} = e.target
      
      // Validating given passwords
      if(!oldPassword.value || !newPassword.value || !confirmPassword.value){
        setMessage('Please fill all field')
      } else if (!passwordRegex.test(newPassword.value)){
        setMessage('Password should be 8+ chars, 1 uppercase, 1 digit, 1 special character')
      } else if (newPassword.value != confirmPassword.value){
        setMessage('Newpassword and confirm password mismatch')
      } else {
        try {
          //Sending api reqeust          
          const response = await axiosInstance.post(`/reset-password?email=${email}`,{
            oldPassword:oldPassword.value,
            newPassword:newPassword.value,
            confirmPassword:confirmPassword.value
          })

          const {data , status} = response
        
          //Redrecting to Login page after successfull password reset
          if(status == 200){
            setMessage(data.msg)
            setTimeout(() => Navigate('/login') , 800);
          }
        } catch (error) {
          if(error.response){
            //Destructuring data and status from error respinse
            const {data , status } = error.response
            
            if(status == 422 || status == 409 || status == 401 || status == 404){
              setMessage(data.msg)
            } else {
              console.log('Invalid responce from server',error);
            }

          } else {
            console.log('No response from server',error);
          }
        }
      }
    } catch (error) {
      console.log('Error in form submit',error);
    }
  }

  if(message) setTimeout(() => setMessage(''), 2000);

  return (
    <main className="w-full pt-24 h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[58%] min-w-[290px] h-[32rem] md:[33rem] xl:h-[34rem]  bg-white overflow-hidden rounded-[.6rem] flex justify-center">
      <div className="hidden xl:flex w-1/2 h-full ">
        <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1">
        <h4 className="text-[1.5rem] md:text-[1.7rem] mt-2 font-playfair">RESET PASSWORD</h4>
        <div className="w-full h-auto flex flex-col mt-9 gap-1">
          <label
            htmlFor="email"
            className="font-roboto pl-2 text-[gray] text-[.8rem]"
          >
            Old Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="oldPassword"
            maxLength={16}
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
          >
            New Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="newPassword"
            maxLength={16}
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
          >
            Confirm Password
          </label>
          <input
            spellCheck={false}
            type='password'
            name="confirmPassword"
            maxLength={16}
            className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
        </div>
        <p className={` ${message ? message == 'Password reset Success' ? 'text-green-600' : 'text-red-600' : 'text-gray-600 text-opacity-90'} mt-5 text-[.95rem] text-center font-roboto`}>{message ? message : 'New password should be 8+ chars, 1 uppercase, 1 digit, 1 special character' }</p>
        <button className="px-8 py-2 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
          SUBMIT
        </button>
      </form>
    </section>
  </main>  )
}

export default PasswordResetContent