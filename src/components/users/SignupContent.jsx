import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLeftImg from "../../assets/Foods/pc8.jpg";
import instance from '../../instance/axiosInstance'

function SignupContent() {

  const Navigate = useNavigate()

  //Regex for email and password
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  //States for saving user datas
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword ,setConfirmPassword] = useState('')

  //State to show validation errors
  const [usernameError, setUserNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError , setPasswordError] = useState('')
  const [confirmPasswordError , setconfirmPasswordError] = useState('')
  
  const [submitError, setSubmitError] = useState('')
  const [register , setRegister ] = useState(false)
  
  //Validating user datas
  const handleChange = (e) =>{
    const {name, value } = e.target
    if(name === 'username'){
        setUserName(value)
        setUserNameError(value.trim().length < 4 ? 'Minimum 4 characters required' : '')
    }
    else if(name === 'email'){
        setEmail(value)
        setEmailError(!emailRegex.test(value) ? 'Invalid email format' : '')
      }
      else if(name === 'password'){
        setPassword(value)
        setPasswordError(!passwordRegex.test(value) ? 'Password should be 8+ chars, 1 uppercase, 1 digit, 1 special character' : '')
      }
      else if(name === 'confirmPassword'){
        setConfirmPassword(value)
        setconfirmPasswordError(value !== password ? 'Password mismatch' : '')
      }
    }
    
    //Passing form datas to backend
    const submitForm = async() => {
      if(!userName.trim(),!email.trim(),!password.trim(),!confirmPassword.trim()){
        setSubmitError('Please fill all Fields')
      }
      else if(usernameError,emailError,passwordError,confirmPasswordError){
        setSubmitError(usernameError || emailError || passwordError && 'Please provide a strong Password' || confirmPasswordError)
      }
      else{
        try {
        //Api for signup
        const response = await instance.post('/signup',{userName,email,password,confirmPassword})
        const {status , data} = response

        if(status == 200){
          
        //Redirecting to login section after registration
        setRegister(true)
        setSubmitError(data.msg)
        setTimeout(() => Navigate(`/confirm-otp/${data.email}`), 800);
        }
       } catch (error) {
        if(error.response){
        const {data , status } = error.response
        if(status == 422){

          //Passing error if validation fails
          setSubmitError(data.msg)
        } else if (status == 409){
          
          // Passing error if user already exist
          setSubmitError(data.msg)
          setTimeout(() => Navigate('/login'), 800);
        } else if (status == 401){

          //If user exist and user is not verified
          setSubmitError('Verification is needed')
          setTimeout(() => Navigate(`/confirm-otp/${data.email}`), 800);
        } 
      } else {
        console.log('Error in signup form submit',error);
      }
     }
   }
}

//Settimeout to remove the error
if (submitError) setTimeout(() => setSubmitError('') , 1000);

return (
  <main className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center">
        <div className="hidden xl:flex w-1/2 h-full ">
          <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
        </div>
        <form className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-5 flex-1">
          <h4 className="text-[2.2rem] mt-1 font-playfair">Signup</h4>
          <div className="w-full h-auto flex flex-col  gap-1">
            <label
              htmlFor="username"
              className={`font-roboto pl-2 ${usernameError ? 'text-[red]' : ''} text-[gray] text-[.75rem]`}
            >
              { usernameError ? usernameError : 'Username' }
            </label>
            <input
              onChange={handleChange}
              value={userName}
              name="username"
              spellCheck={false}
              type="text"
              className="h-[2.5rem] border rounded-[3rem] focus:border-orange-600  outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <label
              htmlFor="email"
              className={`font-roboto pl-2 ${emailError ? 'text-[red]' : ''} text-[gray] text-[.75rem]`}
            >
              {emailError ? emailError : 'Email'}
            </label>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              spellCheck={false}
              type="text"
              className="h-[2.5rem] border rounded-[3rem] focus:border-orange-600  outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <label
              htmlFor="password"
              className={`font-roboto pl-2 ${passwordError ? 'text-[red]' : ''} text-[gray] text-[.75rem]`}
            >
              { passwordError ? passwordError : 'Password' }
            </label>
            <input
              onChange={handleChange}
              value={password}
              name="password"
              spellCheck={false}
              maxLength={16}
              type="password"
              className="h-[2.5rem] border rounded-[3rem] focus:border-orange-600  outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <label
              htmlFor="connfirmpassword"
              className={`font-roboto pl-2 ${confirmPasswordError ? 'text-[red]' : ''} text-[gray] text-[.75rem]`}
            >
              { confirmPasswordError ? confirmPasswordError : 'Confirm Password' }
            </label>
            <input
              onChange={handleChange}
              value={confirmPassword}
              name="confirmPassword"
              spellCheck={false}
              maxLength={16}
              type="password"
              className="h-[2.5rem] border rounded-[3rem] focus:border-orange-600  outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
          </div>
          <p className="text-[.8rem] text-[gray] font-poppins">
            Already Have an account ?{" "}
            <Link to="/Login" className="text-blue-800">
              Login
            </Link>
          </p>
          <p className={`text-center ${register ? 'text-green-700' : 'text-red-500' } text-[.9rem]`}>{submitError}</p>
          <button type="button" onClick={submitForm} className="px-8 py-2 active:scale-[.96] ease-out duration-100 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider bg-[#FF7A00] rounded-3xl text-white cursor-pointer">
            SIGNUP
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignupContent;
