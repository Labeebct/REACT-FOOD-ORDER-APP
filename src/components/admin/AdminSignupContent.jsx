import React, { useState } from 'react'
import axiosInstance from '../../instance/axiosInstance.js'
import { useNavigate } from 'react-router-dom'

function AdminSignupContent() {

   const Navigate = useNavigate()
    
  //State to shoe validation errors to admin
  const [message , setMessage] = useState('')
  const [success , setsuccess] = useState(false)

  const handleSubmit = async(e) => {
    try {

      //Preventing default action
      e.preventDefault()

      //Regex for email and password
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      //Destructuring elements from form event
      const {userName , email , password , secretKey } = e.target

      //Validating signup datas
      if(!userName.value || !email.value || !password.value || !secretKey.value){
        setMessage('Please fill all Fields')
      } else if (userName.value.length < 4) {
        setMessage('Username should be more than 4 character')
      } else if (!emailRegex.test(email.value)){
        setMessage('Invalid email Format')
      } else if (!passwordRegex.test(password.value)) {
        setMessage('Password should be 8+ chars, 1 uppercase, 1 digit, 1 special character')
      } else {
        try {

            //Sending api reqest to backend
            const response = await axiosInstance.post('/admin/signup',{
                userName:userName.value,
                email:email.value,
                password:password.value,
                secretKey:secretKey.value
            })

            const {data , status} = response

            if(status == 200){
                setMessage(data.msg)
                setsuccess(true)
                setTimeout(() => Navigate('/admin/login') , 800);
            }
            
        } catch (error) {
            if(error.response){

                //Destructuring data and status from error response
                const {data , status} = error.response

                if(status == 422 || status == 409 || status == 401){
                    setMessage(data.msg)
                } else {
                    console.log('Invalid response from server',error);
                }

            } else {
                console.log('No response from the server',error);
            }
        }
      }
  
    } catch (error) {
        console.log('Error in signup form submit',error);
    }
  }

  if(message) setTimeout(() => setMessage(''), 2000);


  return (
    <div className='w-full h-full flex items-center justify-center'>
      <section className="w-[33%] mb-2 xl:w-[29%] min-w-[320px] sm:min-w-[370px] h-[34rem] bg-[#fdfdfd14]  overflow-hidden rounded-[.6rem] flex justify-center">
        <form onSubmit={handleSubmit} className="w-full text-black h-full flex  flex-col items-center px-[2.6rem] py-9 gap-4 flex-1">
          <h4 className="text-[2.2rem] font-playfair text-white">Signup</h4>
          <div className="w-full h-auto flex flex-col gap-2">
            <label
              htmlFor="username"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Username
            </label>
            <input
              spellCheck={false}
              type="text"
              name='userName'
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
            <label
              htmlFor="email"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Email
            </label>
            <input
              spellCheck={false}
              type="text"
              name='email'
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
            <label
              htmlFor="email"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Password
            </label>
            <input
              spellCheck={false}
              type="password"
              maxLength={16}
              name='password'
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
            <label
              htmlFor="email"
              className="font-roboto pl-2 text-[gray] text-[.8rem]"
            >
              Secret Key
            </label>
            <input
              spellCheck={false}
              type="password"
              name='secretKey'
              maxLength={12}
              placeholder='XXXX-XXXX-XXXX-XXXX'
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm bg-[#ffffff6a] text-white"
            />
          </div>
          <p className={`text-[.95rem] ${success ? 'text-green-600' : 'text-red-500' } text-center mt-1`}>{message}</p>
          <button className="px-8 py-2 active:scale-[.96] ease-out duration-100 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            SIGNUP
          </button>
        </form>
      </section>
    </div>
  )
}

export default AdminSignupContent