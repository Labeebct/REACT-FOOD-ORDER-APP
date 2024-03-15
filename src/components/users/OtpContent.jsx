import React, { useRef, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import  AxiosInstance  from "../../instance/axiosInstance";
import loginLeftImg from "../../assets/Foods/pc1.jpg";

function OtpContent() {

  const navigate = useNavigate()

  //Taking out email from params
  const { email } = useParams();
  const inputsRef = useRef([]);

  // const [otpValue , setOtpValue] = useState()
  const [message , setMessage ] = useState('')
  const [verified , setVerified ] = useState(false)

  useEffect(() => {
    // Focus the first input when component mounts
    inputsRef.current[0]?.focus();   
  }, []);

  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value && index < inputsRef.current.length - 1) {
      // Move focus to the next input
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      if (e.target.value === "") {
        // Move focus to the previous input
        inputsRef.current[index - 1].focus(); 
      }
    }
  };

  const submitOtp = async(e) => {
    e.preventDefault()
    try {
      const otpValue = inputsRef.current.map(input => input.value).join('');
      if(otpValue.length == 0){
        setMessage('Please provide the OTP')
      }
      else if(otpValue.length < 4){
        setMessage('OTP should be 4 Digits')
      }
      else {
         try {
          const response = await AxiosInstance.post(`/otp-verification/${email}`,{otpValue})
          const {data , status} = response

          if(status == 200){
            //Setting success message after and redirecting to login page after verification success
            setMessage(data.msg)
            setVerified(true)
            setTimeout(() => navigate('/login'), 800);
          }
        } catch (error) {
           if(error.response){
             const {data , status} = error.response
 
             //Handling errors based on status code
             if(status == 422 || status == 409 ){
              inputsRef.current.map(input => input.value = '')
              setMessage(data.msg)
             }
             // If verification failed by any malfunction
             else if(status == 403){
              setMessage(data.msg)
              setTimeout(() => navigate('/signup'), 800);
             }
             else{
              console.log('Internal server error',error);
             }
           } else {
             console.log('Error in submit otp',error);
          }
        }
      }
    } catch (error) {
      console.log('Error in submit otp',error);
    }
  }

  if(message) setTimeout(() => setMessage(''), 1000);

  return (
    <main className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center">
        <div className="hidden xl:flex w-1/2 h-full ">
          <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
        </div>
        <form onSubmit={submitOtp} className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1">
          <h4 className="text-[2.2rem] mt-2 font-playfair">OTP</h4>
          <h3 className="text-center font-poppins text-[.9em] mt-10">
            Enter the Four Digit OTP send to the email <br />
            {email}
          </h3>
          <div className="w-full h-auto flex justify-center mt-9 gap-3">
            {[...Array(4)].map((_, index) => (
              <input
                ref={(el) => (inputsRef.current[index] = el)}
                key={index}
                className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="text"
                maxLength={1}
                onChange={(e) => handleInput(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>
          { message && <p className={`${verified ? 'text-green-600' : 'text-red-500'} text-center mt-5`}>{message}</p>}
          <button type="submit" className="px-8 py-3 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            SUBMIT
          </button>
        </form>
      </section>
    </main>
  );
}

export default OtpContent;
