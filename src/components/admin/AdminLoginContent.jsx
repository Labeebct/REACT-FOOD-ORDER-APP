import React, { useState } from 'react'
import axiosInstance from '../../instance/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

function AdminLoginContent() {

  const Navigate = useNavigate()

  //State to show the error messages
  const [message , setMessage] = useState('')
  const [success , setSuccess] = useState(false)


  const handleSubmit = async(e) => {
    try {

      e.preventDefault()

      //Regex for validating entering datas
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      //Destructuring datas from form target
      const {email , password} = e.target

      //Validating datas
      if(!email.value && !password.value){
        setMessage('Please Fill all Fields')
      } else if (!email.value) {
        setMessage('Please Enter the Email')
      } else if (!password.value) {
        setMessage('Please Enter the Password')
      }  else if (!emailRegex.test(email.value)){
        setMessage('Invalid Email Format')
      } else {
        try {

          //Sending api reqeust to backend
          const response = await axiosInstance.post('/admin/login',{
            email:email.value,
            password:password.value
          })

          //Destructuring data from response
          const {data , status} = response
          //Redirecting to admin dashboard if response is ok
          if(status == 200){
            setSuccess(true)
            setMessage(data.msg)
            localStorage.setItem("token", data.token);
            setTimeout(() => Navigate('/admin/dashboard'), 800);
          }
        } catch (error) {
          if(error.response){
            //Destructuring data and status from error responce
            const {data , status} = error.response

            if(status == 422 || status == 401 || status == 404){
               setMessage(data.msg)
            } else {
              console.log('Unexpected responce from the server',error);
            }

          } else {
            console.log('No response from server',error);
          }
        }
      }
      
    } catch (error) {
      console.log('Error in login handle submit',error);
    }
  }

  if(message) setTimeout(() =>setMessage(''), 2000);
  
  return (
    <div className='w-full h-full flex items-center justify-center'>
     <section className="w-[33%] mb-2 xl:w-[29%] min-w-[320px] sm:min-w-[370px] h-[34rem] bg-[#fdfdfd14]  overflow-hidden rounded-[.6rem] flex justify-center">
        <form onSubmit={handleSubmit} className="w-full text-black h-full flex  flex-col items-center px-[2.6rem] py-9 gap-4 flex-1">
          <h4 className="text-[2.2rem] mt-2 font-playfair text-white">Login</h4>
          <div className="w-full h-auto flex flex-col mt-9 gap-2">
            <label
              htmlFor="email"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Email
            </label>
            <input
              spellCheck={false}
              type="text"
              value={'test@gmail.com'}
              name='email'
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
            <label
              htmlFor="email"
              className="font-roboto mt-3 pl-2 text-[gray] text-[.8rem]"
            >
              Password
            </label>
            <input
              spellCheck={false}
              type="password"
              name='password'
              maxLength={16}
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
          </div>
          <p className={`text-[.95rem] ${success ? 'text-green-600' : 'text-red-500' } text-center mt-6`}>{message}</p>
          <button className="px-8 py-2 mt-4 hover:bg-[#FF5A00] active:scale-[.96] ease-out duration-100 font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            LOGIN
          </button>
        </form>
      </section>
    </div>
  )
}

export default AdminLoginContent