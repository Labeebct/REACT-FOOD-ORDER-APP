import React, { useEffect, useState } from "react";
import LoginTopbar from "../../components/users/LoginTopbar";
import Footer from "../../components/users/Footer";
import LoginContent from "../../components/users/LoginContent";
import { useNavigate } from "react-router-dom";

function Login() {
  const [authenticated, setAuthenticate] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setAuthenticate(true);
        } else {
          setAuthenticate(false);
          navigate('/', {replace: true})
        }
      } catch (error) {
        setAuthenticate(false);
        console.log("Error in check auth", error);
      }
    };

    checkAuth();
  }, []);
  
  return (
    <>
     {
      authenticated && 
      <>
      <LoginTopbar />
      <LoginContent />
      </>
     }
    </>
  );
}

export default Login;
