import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../../instance/axiosInstance";
import loginLeftImg from "../../assets/Foods/pc1.jpg";

function LoginContent() {
  const Navigate = useNavigate();

  //Regex for validating entering datas
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /.{8,}/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailLabel, setEmailLabel] = useState("");
  const [passwordLabel, setPasswordLabel] = useState("");

  const [message, setMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleChange = (e) => {
    //Destructuring datas from evemt
    const { name, value } = e.target;

    if (name == "email") {
      setEmail(value);
      setEmailLabel(!emailRegex.test(value) ? "Invalid email Format" : "");
    } else {
      setPassword(value);
      setPasswordLabel(
        !passwordRegex.test(value)
          ? "Password should contains min 8 character"
          : ""
      );
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Taking out values from event
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (!email.trim() && !password.trim()) {
        setMessage("Please Fill all field");
      } else if (!email.trim()) {
        setMessage("Please Enter the Email");
      } else if (!password.trim()) {
        setMessage("Please Enter the Password");
      } else if ((emailLabel, passwordLabel)) {
        setMessage(emailLabel || passwordLabel);
      } else {
        try {
          //Sending request to backend
          const response = await AxiosInstance.post("/login", {
            email,
            password,
          });
          const { data, status } = response;

          //Redirecting to home page after successfull login
          if (status == 200) {
            setMessage(data.msg);
            setLoginSuccess(true);
            localStorage.setItem('token', data.token);            
            setTimeout(() => Navigate("/home"), 800);
          }
        } catch (error) {
          if (error.response) {
            //Destructuring data and status from error reponse
            const { data, status } = error.response;

            if (status == 422 || status == 401 || status == 404 || status == 503) {
              setMessage(data.msg);
            } else if (status === 403) {
              //if user exist and not verified
              setMessage(data.msg);
              setTimeout(
                () => Navigate(`/otp-verification/login/${data.email}`),
                800
              );
            } else {
              //If any malfunction occurs
              setMessage("Internal Server error");
              console.log("Invalid response", error);
            }
          } else {
            alert("Internal server Error");
            console.log("Error in login form submition", error);
          }
        }
      }
    } catch (error) {
      console.log("Error in login data submit");
    }
  };

  //Removing error from error field after 2s
  if (message) setTimeout(() => setMessage(""), 2000);

  return (
    <main className="w-full h-[calc(100vh-4.5rem)] flex items-center justify-center">
      <section className="w-[33%] mb-2 xl:w-[66%] min-w-[370px] h-[34rem] bg-white overflow-hidden rounded-[.6rem] flex justify-center">
        <div className="hidden xl:flex w-1/2 h-full ">
          <img src={loginLeftImg} alt="foodimage" className="h-full w-full" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-1/2 text-black min-w-[310px] h-full flex  flex-col items-center px-[4.6rem] py-9 gap-4 flex-1"
        >
          <h4 className="text-[2.2rem] mt-2 font-playfair">Login</h4>
          <div className="w-full h-auto flex flex-col mt-9 gap-2">
            <label
              htmlFor="email"
              className={`font-roboto pl-2 ${
                email && emailLabel && "text-red-600"
              } text-[gray] text-[.75rem]`}
            >
              {email && emailLabel ? emailLabel : "Email"}
            </label>
            <input
              spellCheck={false}
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <label
              htmlFor="email"
              className={`font-roboto pl-2 ${
                password && passwordLabel && "text-red-600"
              } text-[gray] text-[.75rem]`}
            >
              {password && passwordLabel ? passwordLabel : "Password"}
            </label>
            <input
              spellCheck={false}
              type="password"
              name="password"
              value={password}
              maxLength={16}
              onChange={handleChange}
              className="h-[2.5rem] border rounded-[3rem] outline-none px-5 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <Link
              to="/forget-password"
              className="text-[.78rem] text-blue-800 text-end mt-1 mr-1 font-roboto"
            >
              Forget Password
            </Link>
          </div>
          <p className="text-[.8rem] text-[gray] font-poppins mt-2">
            Dont Have an account ?{" "}
            <Link to="/signup" className="text-blue-800">
              Signup
            </Link>
          </p>
          <p
            className={`text-center ${
              loginSuccess ? "text-green-600" : "text-red-500"
            } text-[.9rem]`}
          >
            {message}
          </p>
          <button
            type="submit"
            className="px-8 py-2 mt-4 hover:bg-[#FF5A00] font-poppins font-[700] tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 bg-[#FF7A00] rounded-3xl text-white cursor-pointer"
          >
            LOGIN
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginContent;
