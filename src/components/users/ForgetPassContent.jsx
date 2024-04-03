import React, { useRef, useState } from "react";
import loginLeftImg from "../../assets/Foods/pc1.jpg";
import axiosInstance from '../../instance/axiosInstance'
import { useNavigate } from "react-router-dom";
import loadingVideo from "../../assets/Foods/loading.mp4";

function ForgetPassContent() {

  const Navigate = useNavigate()
  const inputRef = useRef(null)

  //Email regex to match the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //To show error message to the users
  const [emaillLabel , setEmailLabel] = useState('')
  const [message , setMessage] = useState('')
  const [success , setSuccess] = useState(false)
  const [loading, setLoading] = useState(true);


  //Validating email format
  const handleChange = (e) => {
    const email = e.target.value
    email ? setEmailLabel(!emailRegex.test(email) ? 'Invalid Email Format' : '') : setEmailLabel('')
  }

  const handleSubmit = async() => {
    try {
      //Taking email using useref
      const email = inputRef.current.value
 
      //Checking email have value and meet email format
      if(!email) setMessage('Please enter the Email')
      else if (emaillLabel) setMessage(emaillLabel)
      else {

      //Sending api request to server
      const response = await axiosInstance.post('/forget-password',{email})
      const {data , status} = response

      if(status == 200){
        setMessage(data.msg)
        setSuccess(true)
        setTimeout(() => Navigate(`/otp-verification/reset/${email}`) , 800);
      }
     }
    } catch (error) {
      if(error.response){
 
        //Destructuring data and status from error response
        const {data , status} = error.response

        if(status == 422 || status == 404){
          setMessage(data.msg)
        } else {
          setMessage('Internal server error')
          console.log('Invalid response',error);
        }

      } else {
        console.log('No response from the server',error);
      }
    }
   }

  if(message) setTimeout(() => setMessage('') , 2000);
  if (loading) setTimeout(() => setLoading(false), 1500);

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
    <main className="w-full pt-24 h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[58%] min-w-[290px] h-[32rem] md:[33rem] xl:h-[34rem]  bg-white overflow-hidden rounded-[.6rem] flex justify-center">
        <div className="hidden xl:flex w-1/2 h-full ">
          <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
        </div>
        <form className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[2rem] py-9 gap-4 flex-1">
          <h4 className="text-[1.8rem] md:text-[2rem] mt-2 font-playfair">
            Forget Password
          </h4>
          <div className="w-full h-auto flex flex-col mt-6 gap-2">
            <p className="text-center text-[.9rem] font-poppins mt-8 mb-3">
              Enter your registered email to reset your password
            </p>
            <label
              htmlFor="email"
              className={`font-roboto pl-2 ${ emaillLabel ? 'text-red-600' : '' } text-[gray] text-[.75rem]`}
            >
              {emaillLabel ? emaillLabel : 'Email'}
            </label>
            <input
              spellCheck={false}
              type="email"
              ref={inputRef}
              onChange={handleChange}
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
          </div>
          <p className={`text-center ${success ? 'text-green-600': 'text-red-600'} text-[.9rem]`}>{message}</p>
          <button type="button" onClick={handleSubmit} className="px-8 py-3 mt-9 hover:bg-[#FF5A00] font-poppins font-[700] active:scale-[.96] ease-out duration-100 tracking-wider bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgetPassContent;
