import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import LeftBar from "../../components/admin/LeftBar";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate()
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        //Taking token to check whether logged in or not
        const token = localStorage.getItem("token");

        if (token) {
          const payload = jwtDecode(token);
          if(payload.role == 'admin'){
            setAuthenticate(true);
          } else {
            navigate('/',{replace:true})
          }
        } else {
          setAuthenticate(false);
          navigate('/admin/login',{replace:true})
        }
      } catch (error) {
        setAuthenticate(false);
        console.log("Error in check auth", error);
      }
    };

    checkAuth();
  },[navigate, setAuthenticate]);

  return (
    <>
      {authenticate && (
        <>
          <main className="w-full h-screen flex">
            <LeftBar />
            <div className="w-full xl:w-[calc(100%-16rem)] h-full ">
              <Outlet />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Layout;
